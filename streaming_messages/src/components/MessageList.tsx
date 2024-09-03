import Message from "./Message";
import SkeletonMessage from "./SkeletonMessage";
import { Message as MessageType } from "../types";

export default function MessageList({
  messages,
  isLoading,
}: {
  messages: MessageType[];
  isLoading: boolean;
}) {
  return (
    <div className="pb-[100px] w-2/3 mx-auto p-10 overflow-y-scroll">
      {messages.map((message, index) => (
        <div key={index}>
          <Message
            text={message.text}
            sender={message.sender}
            toolCalls={message.toolCalls}
          />
        </div>
      ))}
      {isLoading && <SkeletonMessage />}
    </div>
  );
}
