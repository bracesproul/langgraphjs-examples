# LangGraph.js Examples

This repository contains a series of example TypeScript projects which implement LangGraph.js agents.
Each directory focuses on a different problem which LangGraph.js aims to solve/enable solutions for.

## Prerequisites

The following projects all use [LangSmith](https://smith.langchain.com/), LangGraph [Studio](https://github.com/langchain-ai/langgraph-studio) and [Cloud](https://langchain-ai.github.io/langgraph/cloud/), as well as the [LangGraph.js](https://langchain-ai.github.io/langgraphjs/) and [LangChain.js](https://js.langchain.com/v0.2/docs/introduction/) libraries.

Before jumping into any of the projects, you should create a LangSmith account [here](https://smith.langchain.com/), and download the latest LangGraph Studio version [here](https://github.com/langchain-ai/langgraph-studio/releases/latest).

Running LangGraph Studio locally requires [Docker](https://www.docker.com/), so ensure you have it installed _and_ running before starting the Studio (I personally use [OrbStack](https://orbstack.dev/) to manage my Docker containers, which is free to use for personal use).

## Projects

- [Intro](./intro/README.md) - Introduction to LangGraph.js, Studio, and Cloud.
- [Human in the Loop](./human_in_the_loop/README.md) - Introduction to Human in the Loop (HITL) concepts.
- [Stockbroker](./stockbroker/README.md) - A full stack stockbroker & financial analyst app, with HITL for purchasing stocks.
- Streaming Messages ([Examples](./streaming_messages/README.md), [Frontend](./streaming_messages_frontend/README.md)) - Next.js web app connected to a LangGraph Cloud deployment to show off different message streaming types.
