import { graph } from "./graph.js";

const input = {
  messages: {
    role: "user",
    content: "What is the current stock price of $AAPL?",
  },
};

const config = {
  configurable: {
    thread_id: "stream_values",
  },
  streamMode: "values" as const,
};

const stream = await graph.stream(input, config);

for await (const event of stream) {
  console.log(event);
}
