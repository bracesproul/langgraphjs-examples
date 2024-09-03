import { updateState } from "@/utils/chatApi";
import { ThreadState } from "@langchain/langgraph-sdk";
import { useState } from "react";

export interface GraphInterruptProps {
  threadId: string;
  state: ThreadState<Record<string, any>>;
  setAllowNullMessage: (value: boolean) => void;
}

export function GraphInterrupt(props: GraphInterruptProps) {
  const [newState, setNewState] = useState<Record<string, any>>({});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isValidJson, setIsValidJson] = useState(true);
  const [asNode, setAsNode] = useState(props.state.next[0]);
  const [stateUpdated, setStateUpdated] = useState(false);

  async function callUpdateState() {
    setButtonDisabled(true);
    await updateState(props.threadId, {
      newState,
      asNode,
    });
    setButtonDisabled(false);
    setStateUpdated(true);
    props.setAllowNullMessage(true);
  }

  if (stateUpdated) {
    return (
      <div className="flex flex-col w-2/3 mx-auto p-3 overflow-y-scroll">
        <p className="text-white mx-auto">State updated.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-2/3 mx-auto overflow-y-scroll pt-[-100px] pb-[100px]">
      <p className="text-lg text-white">
        Graph interrupted. Next: <code>{props.state.next}</code>
      </p>
      <div className="flex flex-col gap-2">
        <p className="text-gray-200">
          If you&apos;d like to update the state, enter valid JSON to the input
          below:
        </p>
        <input
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value);
              setIsValidJson(true);
              setNewState(parsed);
            } catch (e) {
              setIsValidJson(false);
            }
          }}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-2"
        />
        {!isValidJson && <p className="text-red-500">Invalid JSON</p>}
        <label htmlFor="asNode" className="text-gray-200">
          As Node:
        </label>
        <input
          value={asNode}
          onChange={(e) => setAsNode(e.target.value)}
          id="asNode"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-2"
        />
        <button
          onClick={callUpdateState}
          disabled={buttonDisabled}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
        >
          Update State
        </button>
      </div>
    </div>
  );
}
