import { useState } from "react";

export type Model = "gpt-4o" | "haiku" | "gpt-4o-mini" | "sonnet-3.5";
export type StreamMode = "messages" | "values" | "updates" | "events";

interface SettingsProps {
  onModelChange: (model: Model) => void;
  onSystemInstructionsChange: (instructions: string) => void;
  onStreamModeChange: (mode: StreamMode) => void;
  currentModel: Model;
  currentSystemInstructions: string;
  currentStreamMode: StreamMode;
}

export default function Settings({
  onModelChange,
  onSystemInstructionsChange,
  onStreamModeChange,
  currentModel,
  currentSystemInstructions,
  currentStreamMode,
}: SettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const models: Model[] = ["gpt-4o", "haiku", "gpt-4o-mini", "sonnet-3.5"];
  const streamModes: StreamMode[] = ["messages", "values", "updates", "events"];

  return (
    <div className="absolute right-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-xl text-white"
      >
        ⚙️
      </button>
      {isOpen && (
        <div className="absolute right-0  mt-2 w-64 bg-gray-800 rounded-md shadow-lg z-10 p-4">
          <h3 className="font-bold mt-4 mb-2 text-gray-100">Model</h3>
          <select
            value={currentModel}
            onChange={(e) => {
              onModelChange(e.target.value as Model);
              setIsOpen(false);
            }}
            className="w-full p-2 border text-gray-100 rounded bg-gray-700 text-sm focus:outline-none"
          >
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>

          <h3 className="font-bold mt-4 mb-2 text-gray-100">Stream Mode</h3>
          <select
            value={currentStreamMode}
            onChange={(e) => {
              onStreamModeChange(e.target.value as StreamMode);
              setIsOpen(false);
            }}
            className="w-full p-2 border text-gray-100 rounded bg-gray-700 text-sm focus:outline-none"
          >
            {streamModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>

          <h3 className="font-bold mt-4 mb-2 text-gray-100">
            System Instructions
          </h3>
          <textarea
            value={currentSystemInstructions}
            onChange={(e) => onSystemInstructionsChange(e.target.value)}
            className="w-full h-12 p-2 border rounded bg-gray-700 text-sm focus:outline-none"
            placeholder="Enter system instructions..."
          />
        </div>
      )}
    </div>
  );
}
