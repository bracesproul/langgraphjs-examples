import { Client } from "@langchain/langgraph-sdk";
/**
 * Stream Events
 *
 * What is it:
 * The "events" stream mode is the most comprehensive streaming mode, and will
 * stream back every single event yieldied by the run. This includes events for
 * each token yielded by a chat model, when the model invocation starts, when it
 * stops, etc., etc.
 *
 * When should you use it:
 * This mode should be used when you require the most fine grained control over
 * all events which occur in your run. This can be useful when implementing a
 * generative UI application, where it's important to know when events start,
 * stop, and the data in between for updating the UI.
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
  streamMode: "events",
});

for await (const event of stream) {
  console.log({
    event: event.event,
    data: event.data,
  });
}
