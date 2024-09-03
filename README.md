# LangGraph.js Examples

This repository contains a series of example TypeScript projects which implement LangGraph.js agents.
Each directory focuses on a different problem which LangGraph.js aims to solve/enable solutions for.

## Prerequisites

The following projects all use [LangSmith](https://smith.langchain.com/), LangGraph [Studio](https://github.com/langchain-ai/langgraph-studio) and [Cloud](https://langchain-ai.github.io/langgraph/cloud/), as well as the [LangGraph.js](https://langchain-ai.github.io/langgraphjs/) and [LangChain.js](https://js.langchain.com/v0.2/docs/introduction/) libraries.

Before jumping into any of the projects, you should create a LangSmith account [here](https://smith.langchain.com/), and download the latest LangGraph Studio version [here](https://github.com/langchain-ai/langgraph-studio/releases/latest).

Running LangGraph Studio locally requires [Docker](https://www.docker.com/), so ensure you have it installed _and_ running before starting the Studio (I personally use [OrbStack](https://orbstack.dev/) to manage my Docker containers, which is free to use for personal use).

## Intro

The code for the introduction video can be found in the [`./intro`](./intro) directory.
This directory contains a single graph, located inside the `index.ts` file.

### [YouTube Video](https://www.youtube.com/watch?v=Qu8BYTnh3K0)

### Setup

To setup the intro project, navigate into the [`./intro`](./intro) directory and install the dependencies:

```bash
cd ./intro

yarn install
```

### Environment variables

The intro project requires Tavily and OpenAI API keys to run. Sign up here:

- OpenAI: https://platform.openai.com/signup
- Tavily: https://tavily.com/

Once you have your API keys, create a `.env` file in the [`./intro`](./intro) directory and add the following:

```bash
TAVILY_API_KEY=YOUR_API_KEY
OPENAI_API_KEY=YOUR_API_KEY
```

### LangGraph Config

The LangGraph configuration file for the intro project is located inside [`./intro/langgraph.json`](./intro/langgraph.json). This file defines the single graph implemented in the project: `simple_agent`.

## Human in the Loop

The code for the human in the loop (HITL) conceptual video can be found in the [`./human_in_the_loop`](./human_in_the_loop) directory.
This directory contains two graphs, located inside the [`dynamic_breakpoints.ts`](./human_in_the_loop/src/dynamic_breakpoints.ts) and [`human_in_the_loop.ts`](./human_in_the_loop/src/human_in_the_loop.ts) files.

The dynamic breakpoints graph is not set in the LangGraph config, as it's meant to be a demonstration of how to run it programmatically.
Because of this, there is also a `main` function inside the file which contains the logic necessary to invoke the graph, update the state, and then re-invoke the graph, carrying on where it left off.

### YouTube Video (Coming soon)

### Setup

To setup the HITL project, navigate into the [`./human_in_the_loop`](./human_in_the_loop) directory and install the dependencies:

```bash
cd ./human_in_the_loop

yarn install
```

### Environment variables

The intro project only requires an OpenAI API key to run. Sign up here:

- OpenAI: https://platform.openai.com/signup

Once you have your API keys, create a `.env` file in the [`./human_in_the_loop`](./human_in_the_loop) directory and add the following:

```bash
OPENAI_API_KEY=YOUR_API_KEY
```

### Running the dynamic breakpoints graph

To run the dynamic breakpoints graph, which is not setup to run via LangGraph Studio or Cloud by default --this can be easily changed by adding a new graph to the `graphs` field of the LangGraph config file, commenting out the `main` function, and the `checkpointer` passed to the graph where `.compile({})` is called-- you only need to run a single script:

```bash
yarn start:dynamic_breakpoints
```

This should output roughly the following to the terminal:

<details>
<summary>Show terminal output</summary>

```txt
Event: agent


---INTERRUPTING GRAPH TO UPDATE STATE---


---refundAuthorized value before state update--- undefined
---refundAuthorized value after state update--- true

---CONTINUING GRAPH AFTER STATE UPDATE---


Event: tools
{ role: 'tool', content: 'Successfully processed refund for 123' }

Event: agent
{
  role: 'ai',
  content: 'Your refund for order no. 123 has been successfully processed. If you have any other questions or need further assistance, feel free to ask!'
}
```

</details>

### LangGraph Config

The LangGraph configuration file for the HITL project is located inside [`./human_in_the_loop/langgraph.json`](./human_in_the_loop/langgraph.json). This file defines the HITL graph implemented in the project: `human_in_the_loop`.


## Stockbroker Human in the Loop

The code for the Stockbroker Human in the Loop video can be found in the [`./stockbroker`](./stockbroker), and [`./stockbroker_frontend](./stockbroker_frontend) directories.
The frontend directory contains a Next.js application which allows you to interact with the Stockbroker agent via a chat interface.

### YouTube Video (Coming soon)

### Setup

#### Agent

To setup the agent, first navigate into the [`./stockbroker`](`./stockbroker`) directory and install the dependencies:

```bash
cd ./stockbroker

yarn install
```

#### Frontend

To setup and run the frontend, navigate into the [`./stockbroker_frontend`](./stockbroker_frontend) directory and install the dependencies:

```bash
cd ./stockbroker_frontend

yarn install
```

You can build and start this project like any other Next.js project via:

```bash
yarn build

yarn start
```

### Environment variables

#### Agent

The stockbroker project requires Financial Datasets AI, Tavily and OpenAI API keys to run. Sign up here:

- Financial Datasets AI: https://financialdatasets.ai/
- Tavily: https://tavily.com/
- OpenAI: https://platform.openai.com/signup

Once you have your API keys, create a `.env` file in the [`./stockbroker`](`./stockbroker`) directory and add the following:

```bash
FINANCIAL_DATASETS_API_KEY=YOUR_API_KEY
TAVILY_API_KEY=YOUR_API_KEY
OPENAI_API_KEY=YOUR_API_KEY
```

#### Frontend

The frontend project requires the production, or local deployment of your agent, along with a LangSmith API key (if calling the production endpoint), and finally the name of the agent to interact with (in this case `stockbroker`).

For local development, you can find the API endpoint in the bottom left of LangGraph Studio, which defaults to `http://localhost:51497`. You can find the production URL in the deployment page of your LangGraph cloud deployment.

Then, set the variables in a `.env` file inside [`./stockbroker_frontend`](./stockbroker_frontend):

```bash
# Only required for production deployments
# LANGCHAIN_API_KEY=YOUR_API_KEY
LANGGRAPH_API_URL=http://localhost:51497
NEXT_PUBLIC_LANGGRAPH_GRAPH_ID=stockbroker
```

### LangGraph Config

The LangGraph configuration file for the stockbroker project is located inside [`./stockbroker/langgraph.json`](./stockbroker/langgraph.json). This file defines the stockbroker graph implemented in the project: `stockbroker`.
