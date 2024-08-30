import { ToolNode } from "@langchain/langgraph/prebuilt";
import {
  END,
  START,
  StateGraph,
  MessagesAnnotation,
  MemorySaver,
} from "@langchain/langgraph";
import { type AIMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";
import { tool } from "@langchain/core/tools";
import { logLastMessageToolCalls, logStateUpdate, logEvent } from "utils.js";

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

const tools = [tellJokeTool];
const toolNode = new ToolNode(tools);

const callModel = async (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;

  const llmWithTools = llm.bindTools(tools);
  const result = await llmWithTools.invoke(messages);
  return { messages: [result] };
};

const shouldContinue = (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;

  const lastMessage = messages[messages.length - 1];
  // Cast here since `tool_calls` does not exist on `BaseMessage`
  const messageCastAI = lastMessage as AIMessage;
  if (messageCastAI._getType() !== "ai" || !messageCastAI.tool_calls?.length) {
    // LLM did not call any tools, or it's not an AI message, so we should end.
    return END;
  }

  // Tools are provided, so we should continue.
  return "tools";
};

const workflow = new StateGraph(MessagesAnnotation)
  .addNode("agent", callModel)
  .addEdge(START, "agent")
  .addNode("tools", toolNode)
  .addEdge("tools", "agent")
  .addConditionalEdges("agent", shouldContinue, ["tools", END]);

const checkpointer = new MemorySaver();

export const graph = workflow.compile({
  checkpointer,
  interruptBefore: ["tools"],
});

async function main() {
  const config = {
    configurable: { thread_id: "edit_graph_state" },
    streamMode: "updates" as const,
  };
  const input = { messages: [{ role: "user", content: "Tell me a joke." }] };

  for await (const event of await graph.stream(input, config)) {
    const key = Object.keys(event)[0];
    if (key) {
      console.log(`Event: ${key}\n`);
    }
  }

  console.log("\n---INTERRUPTING GRAPH TO UPDATE STATE---\n\n");

  const { values } = await graph.getState(config);

  // Extract the last message from the current state
  const lastMessage = values.messages[values.messages.length - 1];

  // Log the last message tool calls to the terminal
  logLastMessageToolCalls(lastMessage);

  const newBuildup = "Why did the scarecrow win an award?";
  const newPunchline = "Because he was outstanding in his field!";

  // Log the new buildup and punchline to the terminal
  logStateUpdate(newBuildup, newPunchline);

  lastMessage.tool_calls[0].args.buildup = newBuildup;
  lastMessage.tool_calls[0].args.punchline = newPunchline;

  await graph.updateState(config, { messages: lastMessage });

  console.log("\n---CONTINUING GRAPH AFTER STATE UPDATE---\n\n");

  for await (const event of await graph.stream(null, config)) {
    // Log the event to the terminal
    logEvent(event);
  }
}

main();
