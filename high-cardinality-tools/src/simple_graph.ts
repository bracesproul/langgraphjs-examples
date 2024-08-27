import { BaseMessage, SystemMessage } from "@langchain/core/messages";
import {
  Annotation,
  StateGraph,
  START,
  END,
  messagesStateReducer,
} from "@langchain/langgraph";
import { createReactAgent, ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { tool, type StructuredToolParams } from "@langchain/core/tools";
import { ALL_TOOLS } from "tools.js";

function buildToolsWithFunctions(tools: StructuredToolParams[]) {
  return tools.map((t) => {
    // OpenAI's maximum tool description length is 1024 characters.
    const splitDescription = (desc: string) => {
      if (desc.length <= 1024) return desc;
      return desc.substring(0, 1020).trim() + "...";
    };

    return tool(
      (_) => {
        if (t.name === "_20202021_chinaindia_skirmishes") {
          return "China and India had a conflict in eastern Ladakh along the Line of Actual Control on September 7th, 2020.";
        } else if (t.name === "fatahhamas_conflict") {
          // Other question, correct answer.
          return `The Fatah Hamas Conflict`;
        } else {
          // Selected the wrong tool, return the wrong answer.
          return "China and India had a conflict in eastern Ladakh along the Line of Actual Control on May 5, 2020.";
        }
      },
      {
        ...t,
        description: splitDescription(t.description ?? ""),
      }
    );
  });
}

const GraphAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [],
  }),
});

const llm = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
});

const systemMessage =
  new SystemMessage(`You're an expert historian on conflicts.
The user will ask you a question about a given conflict. You are provided with a series of tools, with each tool corresponding to a unique conflict.
Determine which conflict the user is asking about, then call that tool, passing it the users question to get a response.`);

const tools = buildToolsWithFunctions(ALL_TOOLS);

const agent = createReactAgent({
  llm,
  tools,
  messageModifier: systemMessage,
});
const toolNode = new ToolNode<typeof GraphAnnotation.State>(tools);

const shouldContinue = (
  state: typeof GraphAnnotation.State
): "tools" | typeof END => {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1];
  if (
    "tool_calls" in lastMessage &&
    Array.isArray(lastMessage.tool_calls) &&
    lastMessage.tool_calls?.length
  ) {
    return "tools";
  }
  return END;
};

const workflow = new StateGraph(GraphAnnotation)
  .addNode("agent", agent)
  .addEdge(START, "agent")
  .addNode("tools", toolNode)
  .addConditionalEdges("agent", shouldContinue)
  .addEdge("tools", "agent");

export const graph = workflow.compile();

// Descriptive question, LLM can relativity easily answer this question by calling the correct tool.
const question =
  "On what date did China and India have a conflict in eastern Ladakh along the Line of Actual Control?";
// Less descriptive, LLM has a very difficult time answering this question.
const question2 = "What event involved Gilad Shalit?"; // Correct tool fatahhamas_conflict
