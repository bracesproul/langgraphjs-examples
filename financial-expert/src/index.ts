import { ToolNode } from "@langchain/langgraph/prebuilt";
import {
  Annotation,
  END,
  MemorySaver,
  messagesStateReducer,
  START,
  StateGraph,
} from "@langchain/langgraph";
import {
  AIMessage,
  BaseMessage,
  SystemMessage,
} from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import {
  priceSnapshotTool,
  StockPurchase,
  TOOLS_LIST,
  webSearchTool,
} from "tools.js";
import { z } from "zod";

const systemMessage =
  new SystemMessage(`You're an expert financial analyst, tasked with answering the users questions about a given company or companies.
You do not have up to date information on the companies, so you much call tools when answering users questions.
All finical data tools require a company ticker to be passed in as a parameter. If you do not know the ticker, you should use the webs search tool to find it.`);

const GraphAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [systemMessage],
  }),
  stockPurchaseDetails: Annotation<StockPurchase | null>({
    reducer: (_, value) => value, // Always overwrite the state if a new value is provided.
    default: () => null,
  }),
  // purchaseConfirmed: Annotation<boolean>({
  //   reducer: (_, value) => value ?? false, // Always overwrite the state if a new value is provided.
  //   default: () => false,
  // }),
  purchaseConfirmed: Annotation<boolean>,
});

const llm = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
});

const toolNode = new ToolNode<typeof GraphAnnotation.State>(TOOLS_LIST);

const callModel = async (state: typeof GraphAnnotation.State) => {
  const { messages } = state;

  const llmWithTools = llm.bindTools(TOOLS_LIST);
  const result = await llmWithTools.invoke(messages);
  return { messages: [result] };
};

const shouldContinue = (
  state: typeof GraphAnnotation.State
): Array<"tools" | "confirm_purchase" | "verify_purchase" | typeof END> => {
  const { messages, stockPurchaseDetails } = state;

  const lastMessage = messages[messages.length - 1];
  if (
    lastMessage._getType() !== "ai" ||
    !(lastMessage as AIMessage).tool_calls?.length
  ) {
    // LLM did not call any tools, or it's not an AI message, so we should end.
    return [END];
  }
  // If `stockPurchaseDetails` is present, we want to route to the confirm purchase node.
  if (stockPurchaseDetails) {
    return ["confirm_purchase"];
  }

  const { tool_calls } = lastMessage as AIMessage;
  if (!tool_calls?.length) {
    throw new Error(
      "Expected tool_calls to be an array with at least one element"
    );
  }

  return tool_calls.map((tc) => {
    // Map the tool call to the proper node.
    switch (tc.name) {
      case "income_statements":
      case "balance_sheets":
      case "cash_flow_statements":
      case "company_facts":
      case "price_snapshot":
      case webSearchTool.name:
        // Generic tool is called, so we should call the tools node.
        return "tools";
      case "purchase_stock":
        // The user is trying to purchase a stock, route to the verify purchase node.
        return "verify_purchase";
      default:
        throw new Error(`Unexpected tool call: ${tc.name}`);
    }
  });
};

const findCompanyName = async (companyName: string) => {
  // call the web search tool to find the company name, then pass to LLM to extract from the search results
  const searchResults: string = await webSearchTool.invoke(
    `What is the ticker symbol for ${companyName}?`
  );
  const llmWithTickerOutput = llm.withStructuredOutput(
    z
      .object({
        ticker: z.string().describe("The ticker symbol of the company"),
      })
      .describe(
        `Extract the ticker symbol of ${companyName} from the provided context.`
      ),
    { name: "extract_ticker" }
  );
  const extractedTicker = await llmWithTickerOutput.invoke([
    "human",
    `Given the following search results, extract the ticker symbol for ${companyName}:\n${searchResults}`,
  ]);

  return extractedTicker.ticker;
};

/**
 * This node should be called if the user wants to purchase a stock. Here, we'll do the following:
 * Find the tool call which contains the `purchase_stock` call.
 * If the ticker and company name are not present, route to the node which asks the user for more information (returns an AIMessage with that as the content)
 * If the ticker is not present, but company name is, route to the find company name node.
 * If the ticker is present, route to the human in the loop, confirm purchase node.
 */
const verifyPurchase = async (state: typeof GraphAnnotation.State) => {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1];
  if (lastMessage._getType() !== "ai") {
    throw new Error("Expected the last message to be an AI message");
  }
  const lastAIMessage = lastMessage as AIMessage;
  const purchaseStockTool = lastAIMessage.tool_calls?.find(
    (tc) => tc.name === "purchase_stock"
  );
  if (!purchaseStockTool) {
    throw new Error(
      "Expected the last AI message to have a purchase_stock tool call"
    );
  }

  if (!purchaseStockTool.args.ticker && !purchaseStockTool.args.companyName) {
    // The user did not provide the ticker or the company name.
    // Ask the user for the missing information.
    return {
      messages: [
        new AIMessage(
          "Please provide either the company ticker or the company name to purchase stock."
        ),
      ],
    };
  }
  let { maxPurchasePrice, ticker } = purchaseStockTool.args;
  if (!ticker && purchaseStockTool.args.companyName) {
    // The user did not provide the ticker, but did provide the company name.
    // Call the `findCompanyName` tool to get the ticker.
    ticker = await findCompanyName(purchaseStockTool.args.companyName);
  }

  if (!ticker) {
    throw new Error("Failed to find the ticker symbol for the company");
  }

  if (!maxPurchasePrice) {
    // call the `priceSnapshotTool` to fetch the current price
    const priceSnapshot = await priceSnapshotTool.invoke({ ticker });
    maxPurchasePrice = priceSnapshot.snapshot.price;
  }

  // Now we have the final ticker, we can return the purchase information.
  return {
    stockPurchaseDetails: {
      ticker,
      quantity: purchaseStockTool.args.quantity ?? 1,
      maxPurchasePrice,
    },
  };
};

const confirmPurchaseConditional = (
  state: typeof GraphAnnotation.State
): typeof END | "execute_purchase" => {
  const { purchaseConfirmed, stockPurchaseDetails } = state;
  if (!stockPurchaseDetails) {
    // This should only happen if the user did not provide the ticker or company name.
    // In this case, a new AIMessage will be added to the state asking the user for the missing information.
    return END;
  }
  if (!purchaseConfirmed) {
    // Purchase not confirmed, end.
    return END;
  }
  return "execute_purchase";
};

const executePurchase = async (state: typeof GraphAnnotation.State) => {
  const { stockPurchaseDetails } = state;
  if (!stockPurchaseDetails) {
    throw new Error("Expected the stock purchase details to be present");
  }
  // Execute the purchase. In this demo we'll just return a success message.
  return {
    messages: [
      new AIMessage(
        `Successfully purchases ${stockPurchaseDetails.quantity} share(s) of` +
          `${stockPurchaseDetails.ticker} at $${stockPurchaseDetails.maxPurchasePrice}`
      ),
    ],
  };
};

const workflow = new StateGraph(GraphAnnotation)
  .addNode("agent", callModel)
  .addEdge(START, "agent")
  .addNode("tools", toolNode)
  .addConditionalEdges("agent", shouldContinue)
  .addNode("verify_purchase", verifyPurchase)
  .addConditionalEdges("verify_purchase", confirmPurchaseConditional)
  .addNode("execute_purchase", executePurchase)
  .addEdge("execute_purchase", END)
  .addEdge("tools", "agent");

const checkpointer = new MemorySaver();

export const graph = workflow.compile({
  checkpointer,
  interruptAfter: ["verify_purchase"], // After `verify_purchase`, and before the `confirmPurchaseConditional`, interrupt to confirm the purchase.
});
