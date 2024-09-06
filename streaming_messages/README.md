# Streaming Message Types

This project contains four TypeScript files, each containing calls to a LangGraph Cloud deployment, demonstrating the different ways to stream messages and data from the server to the client.
This ranges from streaming only messages updated in the state, to streaming every event which occurs throughout the duration of your run.

## [YouTube Video](https://youtu.be/wjn5tFbLgwA)

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

### `events`

The "events" stream mode is the most comprehensive streaming mode. It streams back every single event yielded by the run, providing the most detailed insight into the execution process.

#### What data is returned:

The `events` stream mode yields a new event for every single action taken during your run. Each streamed chunk contains two key fields:

- `event`: The type of event yielded. Formatted as `on_[runnable type]_(start|stream|end)`. For example:

  - `on_chain_start`: Indicates the start of a chain execution.
  - `on_chat_model_stream`: Represents streaming output from a language model.
  - `on_chain_end`: Signals the end of a chain execution.

- `data`: The data received by that event. This may include:
  - `input`: Data passed into the event.
  - `output`: Data returned from the event.
  - `chunk`: Any data yielded (streamed) while the event is still in progress.

#### Use case:

The `events` stream mode is ideal for applications requiring fine-grained insights into the exact steps and actions taken during a run. It's particularly useful for:

- Generative UI applications where real-time updates reflecting server-side actions are crucial.
- Debugging complex workflows to understand the sequence and timing of events.
- Building detailed logging or monitoring systems for AI-powered applications.

Key benefits:

- Comprehensive visibility: Captures every event in the run, from start to finish.
- Real-time insights: Allows for immediate reaction to each step in the process.
- Detailed control: Enables fine-grained control over UI updates and application logic based on specific events.

This mode is perfect when you need to create highly responsive and transparent applications that can react to and display the intricacies of the AI's decision-making process in real-time.

### `messages`

The "messages" stream mode focuses on chat messages. It streams chat messages when:

- New messages are added to the thread state
- Updates are made to existing messages with token-by-token streaming

#### What data is returned:

Chat messages will only ever be returned if using this stream model. It does not include the full chat history.

#### Use case:

The "messages" stream mode is best suited for most chatbot applications where chat messages are exchanged between the user and the assistant. A common use case would be a simple chat bot where only human and assistant messages are rendered on the client.

Key benefits:

- Focused data: The API only responds when a chat message is updated in the thread state.
- Efficient: Non-chat message updates to the thread state are not streamed back.
- Real-time interaction: Allows for token-by-token streaming of model responses, enabling a more responsive user experience.

This mode is ideal when you want to create a straightforward chat interface without the need for additional state information or fine-grained event tracking.

### `updates`

The "updates" stream mode is selective in what it returns. It streams:

- Only the updates returned from a node
- Specific key updates made through the `.updateState({ ... })` method

#### What data is returned:

Data is only streamed back in two scenarios:

1. When a node finishes and returns values: The stream sends only the data returned from that node, nested inside an object where the key is the node's name.
2. When the `.updateState({ ... })` method is called: The stream sends back only the values passed to the `updateState` call.

The data returned can be of any type, as the `updates` mode focuses solely on the fact that an update was made, regardless of the data type.

#### Use case:

The "updates" stream mode is ideal when your client needs to know only about specific changes or updates made during the process, without requiring knowledge of the entire thread state.

Key benefits:

- Focused updates: Only streams data when specific updates occur.
- Efficient: Doesn't send unnecessary information, reducing data transfer.
- Flexible: Can handle various types of data updates.

This mode is perfect for applications like notification systems, where the primary task is to display changes and updates without needing the context of the full thread state.
It's also useful for scenarios where you want to track specific milestones or changes in your process without the overhead of streaming all events or the entire state.

### `values`

The "values" stream mode provides a comprehensive view of the thread state. It streams:

- The entire thread state any time it changes
- Updates or additions to the thread state

#### What data is returned:

The `values` stream mode sends data through the stream anytime a change is made to the overall thread state. When a change occurs, this mode responds with the entire thread state, including:

- The recent update
- All existing fields, even if they weren't modified in this event

This means that even if a state field was not updated during a particular event, it will still be included in the streamed data, as the mode returns the complete state.

#### Use case:

The `values` stream mode is ideal for applications that require a real-time, holistic view of the thread state. It's particularly useful in scenarios such as:

- Analytics dashboards displaying the current state of a thread
- Applications needing to show and update all state fields upon any change
- Systems that require constant synchronization between server and client states

Key benefits:

- Comprehensive updates: Provides the full thread state with every change
- Real-time synchronization: Ensures the client always has the most up-to-date information
- Simplifies state management: Eliminates the need for partial state updates on the client side

This mode is perfect when your application needs to know the current state of the thread and be updated whenever it changes.
It's especially useful for systems that are constantly updating in the background, where the client needs to always know and display the current state in its entirety.

## Running the examples

Each of the examples in this project has a corresponding script which can be used to invoke the example.
The following scripts are available:

```bash
yarn start:events
yarn start:messages
yarn start:updates
yarn start:values
```
