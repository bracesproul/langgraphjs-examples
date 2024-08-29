import { ToolNode } from "@langchain/langgraph/prebuilt";
import {
  Annotation,
  END,
  START,
  StateGraph,
  NodeInterrupt,
  MessagesAnnotation,
} from "@langchain/langgraph";
import { type AIMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { tool } from "@langchain/core/tools";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";

const GraphAnnotation = Annotation.Root({
  /**
   * Messages state with reducer and default factory.
   */
  ...MessagesAnnotation.spec,
  /**
   * Whether or not permission to tell a joke has been granted.
   */
  canTellJoke: Annotation<boolean>,
});

const llm = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
});

const tellJokeTool = tool(
  (input) => {
    return `${input.buildup}\n\n${input.punchline}`;
  },
  {
    name: "tell_joke",
    description: "Tell a joke to the user.",
    schema: z.object({
      buildup: z.string().describe("The buildup of the joke."),
      punchline: z.string().describe("The punchline of the joke."),
    }),
  }
);
const webSearchTool = new TavilySearchResults({
  maxResults: 1,
});

const tools = [tellJokeTool, webSearchTool];
const toolNode = new ToolNode(tools);

const callModel = async (state: typeof GraphAnnotation.State) => {
  const { messages } = state;

  const llmWithTools = llm.bindTools(tools);
  const result = await llmWithTools.invoke(messages);
  return { messages: result };
};

const shouldContinue = (state: typeof GraphAnnotation.State) => {
  const { messages, canTellJoke } = state;

  const lastMessage = messages[messages.length - 1];
  // Cast here since `tool_calls` does not exist on `BaseMessage`
  const messageCastAI = lastMessage as AIMessage;
  if (messageCastAI._getType() !== "ai" || !messageCastAI.tool_calls?.length) {
    // LLM did not call any tools, or it's not an AI message, so we should end.
    return END;
  }

  return messageCastAI.tool_calls.map((tc) => {
    if (tc.name === "tell_joke") {
      if (!canTellJoke) {
        // throw a NodeInterrupt to interrupt the flow and ask the user if they want to hear a joke
        throw new NodeInterrupt("You must grant permission to tell a joke.");
      } else {
        // User has granted permission to tell a joke, so we can continue.
        return "tools";
      }
    } else {
      // For all other tools, route to the tools node.
      return "tools";
    }
  });
};

const workflow = new StateGraph(GraphAnnotation)
  .addNode("agent", callModel)
  .addEdge(START, "agent")
  .addNode("tools", toolNode)
  .addEdge("tools", "agent")
  .addConditionalEdges("agent", shouldContinue, ["tools", END]);

export const graph = workflow.compile();
