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
import { SIMPLE_TOOLS_LIST } from "tools.js";

const systemMessage =
  new SystemMessage(`You're an expert financial analyst, tasked with answering the users questions about a given company or companies.
You do not have up to date information on the companies, so you much call tools when answering users questions.
All finical data tools require a company ticker to be passed in as a parameter. If you do not know the ticker, you should use the webs search tool to find it.`);

const MessagesAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [systemMessage],
  }),
});

const llm = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
});

const toolNode = new ToolNode<typeof MessagesAnnotation.State>(
  SIMPLE_TOOLS_LIST
);

const callModel = async (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;

  const llmWithTools = llm.bindTools(SIMPLE_TOOLS_LIST);
  const result = await llmWithTools.invoke(messages);
  return { messages: [result] };
};

const shouldContinue = (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;

  const lastMessage = messages[messages.length - 1];
  if (
    lastMessage._getType() !== "ai" ||
    !(lastMessage as AIMessage).tool_calls?.length
  ) {
    // LLM did not call any tools, or it's not an AI message, so we should end.
    return END;
  }
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
});
