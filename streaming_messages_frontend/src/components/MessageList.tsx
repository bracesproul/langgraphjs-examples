import Message from "./Message";
import { Message as MessageType } from "../types";

export default function MessageList({ messages }: { messages: MessageType[] }) {
  return (
    <div className="pb-[100px] w-2/3 mx-auto p-10 overflow-y-scroll">
      {messages.map((message, index) => (
        <div key={index}>
          <Message
            rawResponse={message.rawResponse}
            text={message.text}
            sender={message.sender}
            toolCalls={message.toolCalls}
          />
        </div>
      ))}
    </div>
  );
}
