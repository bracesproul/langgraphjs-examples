import { updateState } from "@/utils/chatApi";
import { ThreadState } from "@langchain/langgraph-sdk";
import { useState } from "react";

export interface GraphInterruptProps {
  threadId: string;
  state: ThreadState<Record<string, any>>;
  setAllowNullMessage: (value: boolean) => void;
}

// The JSON to update state with if the user confirms the purchase.
const CONFIRM_PURCHASE = {
  purchaseConfirmed: true,
};
// The name of the node to update the state as
const PREPARE_PURCHASE_DETAILS_NODE = "prepare_purchase_details";

export function GraphInterrupt(props: GraphInterruptProps) {
  const [confirmed, setConfirmed] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [stateUpdated, setStateUpdated] = useState(false);

  async function callUpdateState() {
    setDisabled(true);
    await updateState(props.threadId, {
      newState: CONFIRM_PURCHASE,
      asNode: PREPARE_PURCHASE_DETAILS_NODE,
    });
    setDisabled(false);
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
      <p className="text-lg text-white mb-4">
        Graph interrupted. Next: <code>{props.state.next}</code>
      </p>
      <div className="flex flex-col gap-4">
        <label className="flex items-center space-x-3 text-white">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            disabled={disabled}
            className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500 disabled:opacity-50 cursor-pointer"
          />
          <span className={`font-medium ${disabled ? "opacity-50" : ""}`}>
            Confirm purchase
          </span>
        </label>

        <button
          onClick={callUpdateState}
          disabled={disabled || !confirmed}
          className={
            "bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out" +
            "hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" +
            "disabled:opacity-50 disabled:cursor-not-allowed"
          }
        >
          Update State
        </button>
      </div>
    </div>
  );
}
