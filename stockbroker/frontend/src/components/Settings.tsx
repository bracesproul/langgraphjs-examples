import { useState } from "react";

export type Model = "gpt-4o" | "haiku" | "gpt-4o-mini" | "sonnet-3.5";

interface SettingsProps {
  onModelChange: (model: Model) => void;
  onSystemInstructionsChange: (instructions: string) => void;
  currentModel: Model;
  currentSystemInstructions: string;
}

export default function Settings({
  onModelChange,
  onSystemInstructionsChange,
  currentModel,
  currentSystemInstructions,
}: SettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const models: Model[] = ["gpt-4o", "haiku", "gpt-4o-mini", "sonnet-3.5"];

  return (
    <div className="absolute  right-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-xl text-white"
      >
        ⚙️
      </button>
      {isOpen && (
        <div className="absolute right-0  mt-2 w-64 bg-gray-800 rounded-md shadow-lg z-10 p-4">
          <h3 className="font-bold mb-2">Model</h3>
          {models.map((model) => (
            <button
              key={model}
              onClick={() => {
                onModelChange(model);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm ${
                model === currentModel
                  ? "text-white bg-gray-700 font-bold"
                  : "text-gray-200 hover:bg-gray-100"
              }`}
            >
              {model}
            </button>
          ))}
          <h3 className="font-bold mt-4 mb-2">System Instructions</h3>
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
