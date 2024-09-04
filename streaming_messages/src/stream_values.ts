import { Client } from '@langchain/langgraph-sdk';
/**
 * Stream Events
 * 
 * What is it:
 * The "values" stream mode will stream back the thread state any time it changes.
 * This means anytime the thread state is updated, or appended to, it is streamed
 * back to the client.
 * 
 * When should you use it:
 * When your application needs to know the current state of the thread, and be
 * updated whenever it changes. For example, this is useful if building a system
 * which is constantly updating it the background, and the client needs to always
 * know the current state.
 */

const client = new Client({
  apiKey: process.env.LANGCHAIN_API_KEY,
  apiUrl: process.env.LANGGRAPH_API_URL
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
    content: "What is the current stock price of $AAPL?"
  }
}

const stream = client.runs.stream(threadId, assistantId, {
  input,
  streamMode: "values",
})

for await (const event of stream) {
  console.log({
    event: event.event,
    data: event.data,
  });
}