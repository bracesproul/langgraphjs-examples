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
  ToolMessage,
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
  requestedStockPurchaseDetails: Annotation<StockPurchase | null>({
    reducer: (_, update) => update, // Always overwrite the state if a new value is provided.
    default: () => null,
  }),
  confirmedStockPurchaseDetails: Annotation<StockPurchase | null>,
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

const shouldContinue = (state: typeof GraphAnnotation.State) => {
  const { messages, requestedStockPurchaseDetails } = state;

  const lastMessage = messages[messages.length - 1];
  if (
    lastMessage._getType() !== "ai" ||
    !(lastMessage as AIMessage).tool_calls?.length
  ) {
    // LLM did not call any tools, or it's not an AI message, so we should end.
    return END;
  }
  // If `requestedStockPurchaseDetails` is present, we want to route to the confirm purchase node.
  if (requestedStockPurchaseDetails) {
    return "confirm_purchase";
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
        // Generic tool is called, so we should call `ToolNode`.
        return "tools";
      case "purchase_stock":
        // The user is trying to purchase a stock, route to the verify purchase node.
        return "prepare_purchase_details";
      default:
        throw new Error(`Unexpected tool call: ${tc.name}`);
    }
  });
};

const findCompanyName = async (companyName: string) => {
  // Use the web search tool to find the ticker symbol for the company.
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

const preparePurchaseDetails = async (state: typeof GraphAnnotation.State) => {
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
    // Ask the user for the missing information. Also, if the last message had a tool call
    // we need to add ToolMessages to the messages array.
    const toolMessages = lastAIMessage.tool_calls?.map((tc) => {
      return new ToolMessage({
        name: tc.name,
        content: "Please provide the missing information.",
        tool_call_id: tc.id ?? "",
      });
    });
    return {
      messages: [
        ...(toolMessages ?? []),
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
    requestedStockPurchaseDetails: {
      ticker,
      quantity: purchaseStockTool.args.quantity ?? 1,
      maxPurchasePrice,
    },
  };
};

const confirmPurchaseConditional = (state: typeof GraphAnnotation.State) => {
  const { confirmedStockPurchaseDetails } = state;
  if (!confirmedStockPurchaseDetails) {
    // Details not confirmed, start over.
    return "agent";
  }

  return "execute_purchase";
};

const executePurchase = async (state: typeof GraphAnnotation.State) => {
  const { confirmedStockPurchaseDetails } = state;
  if (!confirmedStockPurchaseDetails) {
    throw new Error("Expected the stock purchase details to be present");
  }

  const { ticker, quantity, maxPurchasePrice } = confirmedStockPurchaseDetails;
  // Execute the purchase. In this demo we'll just return a success message.
  return {
    messages: [
      new AIMessage(
        `Successfully purchases ${quantity} share(s) of ` +
          `${ticker} at $${maxPurchasePrice}/share.`
      ),
    ],
  };
};

const confirmAuthorization = async (state: typeof GraphAnnotation.State) => {
  // Remove the requested purchase details from the state. If the purchase is confirmed,
  // then set the `confirmedStockPurchaseDetails` with the requested details.
  return {
    requestedStockPurchaseDetails: null,
    purchaseConfirmed: false,
    confirmedStockPurchaseDetails: state.purchaseConfirmed
      ? state.requestedStockPurchaseDetails
      : null,
  };
};

const workflow = new StateGraph(GraphAnnotation)
  .addNode("agent", callModel)
  .addEdge(START, "agent")
  .addNode("tools", toolNode)
  .addNode("prepare_purchase_details", preparePurchaseDetails)
  .addNode("confirm_authorization", confirmAuthorization)
  .addEdge("prepare_purchase_details", "confirm_authorization")
  .addNode("execute_purchase", executePurchase)
  .addEdge("execute_purchase", END)
  .addEdge("tools", "agent")
  .addConditionalEdges("agent", shouldContinue, [
    "tools",
    END,
    "prepare_purchase_details",
    "execute_purchase",
  ])
  .addConditionalEdges("confirm_authorization", confirmPurchaseConditional, [
    "agent",
    "execute_purchase",
  ]);

const checkpointer = new MemorySaver();

export const graph = workflow.compile({
  checkpointer,
  interruptBefore: ["confirm_authorization"],
});

/**
 * UNCOMMENT BELOW TO RUN PROGRAMMATICALLY
 */
// const config = { configurable: { thread_id: "1" }, streamMode: "updates" as const };
// const input = {
//   messages: [new HumanMessage("I want to buy 4 shares of AAPL for $228 each.")],
// };

// for await (const event of await graph.stream(input, config)) {
//   const key = Object.keys(event)[0];
//   console.log(`Event: ${key}`);

//   if (key === "prepare_purchase_details") {
//     console.log("\n---PREPARING PURCHASE DETAILS---\n")
//     console.log(event);
//   }
// }

// await graph.updateState(config, { purchaseConfirmed: true });

// console.log("\n---UPDATED STATE---\n")

// for await (const event of await graph.stream(null, config)) {
//   const key = Object.keys(event)[0];
//   console.log(`Event: ${key}`);

//   if (key === "confirm_authorization") {
//     console.log("\n---CONFIRMING AUTHORIZATION---\n")
//     console.log(event);
//   } else if (key === "execute_purchase") {
//     console.log("\n---EXECUTING PURCHASE---\n")
//     console.log(event);
//   }
// }
