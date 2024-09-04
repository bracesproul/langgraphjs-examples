# Streaming Message Types

This project contains four TypeScript files, each containing calls to a LangGraph Cloud deployment, demonstrating the different ways to stream messages and data from the server to the client.
This ranges from streaming only messages updated in the state, to streaming every event which occurs throughout the duration of your run.

## YouTube Video (Coming soon)

## Setup

To setup the streaming message types project, install the dependencies:

```bash
yarn install
```

## Environment variables

The streaming messages project only requires your LangChain API key, the LangGraph Cloud deployment URL, and the name of your graph.

Once you have these, create a `.env` file in this directory and add the following:

```bash
LANGGRAPH_API_URL=http://localhost:8123 # Or your production URL
LANGCHAIN_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_LANGGRAPH_GRAPH_ID=YOUR_GRAPH_ID
```

## Message Types

### Stream Events
The "events" stream mode is the most comprehensive streaming mode. It streams back every single event yielded by the run, including:
- Each token yielded by a chat model
- When model invocation starts and stops
- And many other fine-grained events

**Use case:** When you need the most fine-grained control over all events in your run. Ideal for generative UI applications where it's crucial to know when events start, stop, and the data in between for updating the UI.

### Stream Messages
The "messages" stream mode focuses on chat messages. It streams:
- Chat messages from the thread state
- Calls to chat models, token-by-token where possible
- Updates to the thread state with new chat messages

**Use case:** Best for most chatbot applications where chat messages are exchanged between the user and the assistant.

### Stream Updates
The "updates" stream mode is selective in what it returns. It streams:
- Only the updates returned from a node
- Specific key updates, not the entire thread state

**Use case:** Ideal when your client needs to know only the updates made. For example, in a notification system where only the changes are important.

### Stream Values
The "values" stream mode provides a comprehensive view of the thread state. It streams:
- The entire thread state any time it changes
- Updates or additions to the thread state

**Use case:** When your application needs to know the current state of the thread and be updated whenever it changes. Useful for systems that are constantly updating in the background, where the client needs to always know the current state.

## Running the examples

Each of the examples in this project has a corresponding script which can be used to invoke the example.
The following scripts are available:

```bash
yarn start:events
yarn start:messages
yarn start:updates
yarn start:values
```
