import {
  HumanMessage,
} from "@langchain/core/messages";
import { END, START, StateGraph, MessagesAnnotation, MemorySaver } from "@langchain/langgraph";

// const MessagesAnnotation = Annotation.Root({
//   messages: Annotation<BaseMessage[]>({
//     reducer: (state, update) => state.concat(update),
//     default: () => [],
//   }),
// });

const nodeOne = (_: typeof MessagesAnnotation.State) => {
  return {
    messages: [new HumanMessage("Return value from __nodeOne__")],
  };
};

const nodeTwo = (_: typeof MessagesAnnotation.State) => {
  return {
    messages: [new HumanMessage("Return value from __nodeTwo__")],
  };
};

const nodeThree = (_: typeof MessagesAnnotation.State) => {
  return {
    messages: [new HumanMessage("Return value from __nodeThree__")],
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

const checkpointer = new MemorySaver();
export const graph = workflow.compile({ checkpointer });
