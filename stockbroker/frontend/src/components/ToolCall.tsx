"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Throws build errors if we try to import this normally
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

const ToolCall = ({
  name,
  args,
  result,
}: {
  name: string;
  args: any;
  result?: any;
}) => {
  const [isResultVisible, setIsResultVisible] = useState(false);

  let parsedArgs: Record<string, any> | null = null;
  let isParsedArgsDefined = false;
  try {
    if (typeof args === "string") {
      parsedArgs = JSON.parse(args);
    } else if (typeof args === "object") {
      parsedArgs = args;
    }
    isParsedArgsDefined = true;
  } catch (_) {
    // incomplete JSON, no-op
  }

  let resultString: string | null = null;
  let resultObject: Record<string, any> | null = null;
  let isResultDefined = false;
  try {
    resultString = result;
    if (resultString) {
      isResultDefined = true;
      resultObject = JSON.parse(resultString);
      // If we're able to parse result, then it's a JSON object and we should remove the string
      // so it's not able to be duplicated in the rendered UI.
      resultString = null;
    }
  } catch (_) {
    // incomplete JSON, no-op
  }

  return (
    <div className="bg-[#3a3a3a] text-white p-4 rounded-lg mb-2 text-sm relative flex flex-col gap-1">
      <div className="w-full mb-2 flex justify-between items-center">
        <div className="flex flex-row items-center justify-start gap-2">
          <span className="text-gray-400">Tool Call:</span>
          <p className="text-small opacity-80">{name}</p>
        </div>
        {isResultDefined && (
          <button
            onClick={() => setIsResultVisible(!isResultVisible)}
            className="text-gray-400 hover:text-gray-300 focus:outline-none"
          >
            {isResultVisible ? "Hide result" : "Show result"}
          </button>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-gray-400">Arguments:</p>
        <span>
          {isParsedArgsDefined && parsedArgs ? (
            <ReactJson
              displayObjectSize={false}
              style={{ backgroundColor: "transparent" }}
              displayDataTypes={false}
              quotesOnKeys={false}
              enableClipboard={false}
              name={false}
              src={parsedArgs}
              theme="tomorrow"
            />
          ) : typeof args === "string" ? (
            <p>{args}</p>
          ) : (
            <code>{JSON.stringify(args, null, 2)}</code>
          )}
        </span>
      </div>

      {isResultDefined && (
        <div
          className={`mt-2 overflow-y-scroll transition-all duration-500 ease-in-out ${
            isResultVisible ? "max-h-96" : "max-h-0"
          }`}
        >
          <span>
            <p className="text-gray-400">Result:</p>
            <div>
              {resultObject && !resultString ? (
                <ReactJson
                  displayObjectSize={false}
                  style={{
                    backgroundColor: "transparent",
                  }}
                  displayDataTypes={false}
                  quotesOnKeys={false}
                  enableClipboard={false}
                  name={false}
                  src={resultObject}
                  theme="tomorrow"
                />
              ) : null}
              {resultString && !resultObject && <p>{resultString}</p>}
            </div>
          </span>
        </div>
      )}
    </div>
  );
};

export default ToolCall;
