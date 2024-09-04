# Human in the Loop

The code for the human in the loop (HITL) conceptual video can be found in this directory.
This directory contains two graphs, located inside the [`dynamic_breakpoints.ts`](./src/dynamic_breakpoints.ts) and [`human_in_the_loop.ts`](./src/human_in_the_loop.ts) files.

The dynamic breakpoints graph is not set in the LangGraph config, as it's meant to be a demonstration of how to run it programmatically.
Because of this, there is also a `main` function inside the file which contains the logic necessary to invoke the graph, update the state, and then re-invoke the graph, carrying on where it left off.

## [YouTube Video](https://www.youtube.com/watch?v=gm-WaPTFQqM)

## Setup

To setup the HITL project, install the dependencies:

```bash
yarn install
```

## Environment variables

The HITL project only requires an OpenAI API key to run. Sign up here:

- OpenAI: https://platform.openai.com/signup

Once you have your API keys, create a `.env` file in this directory and add the following:

```bash
OPENAI_API_KEY=YOUR_API_KEY
```

## Running the dynamic breakpoints graph

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

## LangGraph Config

The LangGraph configuration file for the HITL project is located inside [`langgraph.json`](langgraph.json). This file defines the HITL graph implemented in the project: `human_in_the_loop`.
