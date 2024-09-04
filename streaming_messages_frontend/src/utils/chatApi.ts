import { StreamMode } from "@/components/Settings";
import { ThreadState } from "@langchain/langgraph-sdk";

export const createAssistant = async (graphId: string) => {
  const response = await fetch("/api/createAssistant", {
    method: "POST",
    body: JSON.stringify({ graphId }),
  });
  return response.json();
};

export const createThread = async () => {
  const response = await fetch("/api/createThread", { method: "POST" });
  return response.json();
};

export const getThreadState = async (
  threadId: string
): Promise<ThreadState<Record<string, any>>> => {
  const response = await fetch("/api/getThreadState", {
    method: "POST",
    body: JSON.stringify({ threadId }),
  });
  return response.json();
};

export const updateState = async (
  threadId: string,
  fields: {
    newState: Record<string, any>;
    asNode?: string;
  }
): Promise<ThreadState<Record<string, any>>> => {
  const response = await fetch("/api/updateState", {
    method: "POST",
    body: JSON.stringify({ threadId, ...fields }),
  });
  return response.json();
};

export const sendMessage = async (params: {
  threadId: string;
  assistantId: string;
  message: string | null;
  messageId: string;
  model: string;
  userId: string;
  systemInstructions: string;
  streamMode: StreamMode;
}) => {
  return fetch("/api/sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
};
