import Markdown from "react-markdown";
import ToolCall from "./ToolCall";
import { ToolCall as ToolCallType } from "../types";
import { useState, useEffect } from "react";

export default function Message({
  text,
  sender,
  toolCalls,
}: {
  text: string;
  sender: string;
  toolCalls?: ToolCallType[];
}) {
  const isBot = sender === "ai";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex ${
        isBot ? "justify-start" : "justify-end"
      } mb-4 relative transition-opacity duration-1000 ease-in-out ${
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
        {toolCalls &&
          toolCalls.length > 0 &&
          toolCalls.map((toolCall) => (
            <ToolCall key={toolCall.id} {...toolCall} />
          ))}
        {isBot ? <Markdown>{text}</Markdown> : text}
      </div>
    </div>
  );
}
