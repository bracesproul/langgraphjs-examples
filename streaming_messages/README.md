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

## Running the examples

Each of the examples in this project has a corresponding script which can be used to invoke the example.
The following scripts are available:

```bash
yarn start:events
yarn start:messages
yarn start:updates
yarn start:values
```