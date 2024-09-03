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
  newState: Record<string, any>
): Promise<ThreadState<Record<string, any>>> => {
  const response = await fetch("/api/updateState", {
    method: "POST",
    body: JSON.stringify({ threadId, newState }),
  });
  return response.json();
};

export const sendMessage = async (params: {
  threadId: string;
  assistantId: string;
  message: string | null;
  model: string;
  userId: string;
  systemInstructions: string;
}) => {
  return fetch("/api/sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
};
