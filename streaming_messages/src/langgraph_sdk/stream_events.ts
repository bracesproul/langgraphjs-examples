import { Client } from "@langchain/langgraph-sdk";

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
