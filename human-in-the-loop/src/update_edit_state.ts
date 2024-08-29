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

  const currentState = await graph.getState(config);
  const lastMessage =
    currentState.values.messages[currentState.values.messages.length - 1];
  console.log("Last message tool calls:", {
    name: lastMessage.tool_calls[0].name,
    args: lastMessage.tool_calls[0].args,
  });

  console.log(
    "Updating state to:",
    {
      buildup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
    "\n"
  );

  lastMessage.tool_calls[0].args.buildup =
    "Why did the scarecrow win an award?";
  lastMessage.tool_calls[0].args.punchline =
    "Because he was outstanding in his field!";

  await graph.updateState(config, { messages: lastMessage });

  console.log("\n---CONTINUING GRAPH AFTER STATE UPDATE---\n\n");

  for await (const event of await graph.stream(null, config)) {
    const key = Object.keys(event)[0];
    if (key) {
      console.log(`Event: ${key}`);
      if (Array.isArray(event[key].messages)) {
        const lastMsg = event[key].messages[event[key].messages.length - 1];
        console.log(
          {
            role: lastMsg._getType(),
            content: lastMsg.content,
          },
          "\n"
        );
      } else {
        console.log(
          {
            role: event[key].messages._getType(),
            content: event[key].messages.content,
          },
          "\n"
        );
      }
    }
  }
}

main();
