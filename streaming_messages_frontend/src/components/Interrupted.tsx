import { type Command, ThreadState } from "@langchain/langgraph-sdk";
import { useState } from "react";

export interface GraphInterruptProps {
  threadId: string;
  assistantId: string;
  state: ThreadState<Record<string, any>>;
  handleSendMessage: (message: string | null, command?: Command) => void; // Add this line
}

export function GraphInterrupt(props: GraphInterruptProps) {
  const [newState, setNewState] = useState<Record<string, any>>({});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isValidJson, setIsValidJson] = useState(true);
  const [stateUpdated, setStateUpdated] = useState(false);

  async function callUpdateState() {
    setButtonDisabled(true);
    // Pass the command up to ChatInterface
    props.handleSendMessage(null, { resume: newState });
    setButtonDisabled(false);
    setStateUpdated(true);
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
        <button
          onClick={callUpdateState}
          disabled={buttonDisabled}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
        >
          Resume
        </button>
      </div>
    </div>
  );
}
