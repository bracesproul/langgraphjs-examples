import { useState } from "react";

export default function InputArea({
  onSendMessage,
  disabled,
}: {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (disabled) return;
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" p-0">
      <div className="flex fixed left-1/4 w-1/2 h-[60px] mx-auto bottom-5  ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" h-full w-full  rounded-[30px] px-10 focus:outline-none bg-[#2f2f2f] placeholder-white text-white"
          placeholder="Message StreamChat"
        />
        <button
          disabled={disabled}
          type="submit"
          className={`absolute right-[10px] bottom-[10px] w-[40px] h-[40px] rounded-[20px] text-white flex items-center justify-center transition-colors ${
            disabled
              ? "bg-[#4a4a4a] cursor-not-allowed"
              : "bg-[#676767] hover:bg-[#7a7a7a]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className={disabled ? "opacity-50" : ""}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.394 6.68a.857.857 0 0 1 1.212 0l3.857 3.857a.857.857 0 0 1-1.212 1.212l-2.394-2.394v7.36a.857.857 0 0 1-1.714 0v-7.36l-2.394 2.394a.857.857 0 1 1-1.212-1.212z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
