import { Client } from '@langchain/langgraph-sdk';
/**
 * Stream Events
 * 
 * What is it:
 * The "updates" stream mode will stream back only the updates returned
 * from a node. For example, if your thread has three keys "key1", "key2",
 * and "key3", and you return an update for "key2" from a node, only the
 * update for "key2" will be streamed back to the client. It does not include
 * any other values, or the current state of the thread.
 * 
 * When should you use it:
 * This should be used when your client needs to know only the updates made,
 * for example in a notification system, where only the changes are important.
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
  streamMode: "updates",
})

for await (const event of stream) {
  console.log({
    event: event.event,
    data: event.data,
  });
}