import { Client } from "@langchain/langgraph-sdk";
import { logMessageEvent } from "utils.js";
/**
 * Stream Messages
 *
 * What is it:
 * The "messages" stream mode will stream back chat messages from the
 * thread state and calls to chat models, token-by-token where possible.
 * This means every time the thread state is updated with a chat message,
 * it is streamed back to the client.
 *
 * When should you use it:
 * This streaming mode should be used in most chatbot applications, where
 * you have chat messages going back and forth between the user and the
 * assistant.
 */

const client = new Client({
  apiKey: process.env.LANGCHAIN_API_KEY,
  apiUrl: process.env.LANGGRAPH_API_URL,
});

const thread = await client.threads.create();
const threadId = thread.thread_id;
const assistant = await client.assistants.create({
  graphId: process.env.LANGGRAPH_GRAPH_ID as string,
});
const assistantId = assistant.assistant_id;

const input = {
  messages: {
    role: "user",
    content: "What is the current stock price of $AAPL?",
  },
};

const stream = client.runs.stream(threadId, assistantId, {
  input,
  streamMode: "messages",
});

let toolCallLogged = false;
let contentLogged = false;

for await (const event of stream) {
  const res = logMessageEvent(event, {
    toolCallLogged,
    contentLogged,
  });
  toolCallLogged = res.toolCallLogged;
  contentLogged = res.contentLogged;
}
