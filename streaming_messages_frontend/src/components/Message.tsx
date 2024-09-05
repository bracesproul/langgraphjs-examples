import Markdown from "react-markdown";
import ToolCall from "./ToolCall";
import { ToolCall as ToolCallType } from "../types";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Throws build errors if we try to import this normally
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

export default function Message({
  text,
  rawResponse,
  sender,
  toolCalls,
}: {
  text?: string;
  rawResponse?: Record<string, any>;
  sender: string;
  toolCalls?: ToolCallType[];
}) {
  const isBot = sender === "ai";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  let messageContent: React.ReactNode;
  if (rawResponse) {
    messageContent = (
      <ReactJson
        displayObjectSize={false}
        style={{ backgroundColor: "transparent" }}
        displayDataTypes={false}
        quotesOnKeys={false}
        enableClipboard={false}
        name={false}
        src={rawResponse}
        theme="tomorrow"
      />
    );
  } else {
    messageContent = (
      <>
        {toolCalls &&
          toolCalls.length > 0 &&
          toolCalls.map((toolCall) => (
            <ToolCall key={toolCall.id} {...toolCall} />
          ))}
        {isBot ? <Markdown>{text}</Markdown> : text}
      </>
    );
  }

  return (
    <div
      className={`flex ${
        isBot ? "justify-start" : "justify-end"
      } mb-4 relative transition-opacity duration-200 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {isBot && (
        <img
          src="/logo.jpeg"
          alt="Bot Icon"
          className="absolute left-0 top-4 w-8 h-8 rounded-full"
          style={{ transform: "translateX(-120%)" }}
        />
      )}
      <div
        className={`overflow-x-wrap break-words p-5 rounded-3xl ${
          isBot
            ? "w-full opacity-90 text-gray-200"
            : "mt-10 max-w-md text-gray-200 opacity-90"
        }`}
      >
        {messageContent}
      </div>
    </div>
  );
}
