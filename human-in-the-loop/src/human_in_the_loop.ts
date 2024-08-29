import {
  END,
  START,
  StateGraph,
  MessagesAnnotation,
} from "@langchain/langgraph";

const nodeOne = (_: typeof MessagesAnnotation.State) => {
  return {
    messages: {
      role: "user",
      content: "Return value from __nodeOne__",
    },
  };
};

const nodeTwo = (_: typeof MessagesAnnotation.State) => {
  return {
    messages: {
      role: "user",
      content: "Return value from __nodeTwo__",
    },
  };
};

const nodeThree = (_: typeof MessagesAnnotation.State) => {
  return {
    messages: {
      role: "user",
      content: "Return value from __nodeThree__",
    },
  };
};

const workflow = new StateGraph(MessagesAnnotation)
  .addNode("nodeOne", nodeOne)
  .addNode("nodeTwo", nodeTwo)
  .addNode("nodeThree", nodeThree)
  .addEdge(START, "nodeOne")
  .addEdge("nodeOne", "nodeTwo")
  .addEdge("nodeTwo", "nodeThree")
  .addEdge("nodeThree", END);

export const graph = workflow.compile();
