import { StreamMode } from "@/components/Settings";
import { ThreadState, Client } from "@langchain/langgraph-sdk";

const createClient = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api";
  return new Client({
    apiUrl,
  });
};

export const createAssistant = async (graphId: string) => {
  const client = createClient();
  return client.assistants.create({ graphId });
};

export const createThread = async () => {
  const client = createClient();
  return client.threads.create();
};

export const getThreadState = async (
  threadId: string
): Promise<ThreadState<Record<string, any>>> => {
  const client = createClient();
  return client.threads.getState(threadId);
};

export const updateState = async (
  threadId: string,
  fields: {
    newState: Record<string, any>;
    asNode?: string;
  }
) => {
  const client = createClient();
  return client.threads.updateState(threadId, {
    values: fields.newState,
    asNode: fields.asNode,
  });
};

export const sendMessage = async (params: {
  threadId: string;
  assistantId: string;
  messageId: string;
  message: string | null;
  model: string;
  userId: string;
  systemInstructions: string;
  streamMode: StreamMode;
}) => {
  const client = createClient();

  let input: Record<string, any> | null = null;
  if (params.message !== null) {
    input = {
      messages: [
        {
          id: params.messageId,
          role: "human",
          content: params.message,
        },
      ],
      userId: params.userId,
    };
  }
  const config = {
    configurable: {
      model_name: params.model,
      system_instructions: params.systemInstructions,
    },
  };

  return client.runs.stream(params.threadId, params.assistantId, {
    input,
    config,
    streamMode: params.streamMode,
  });
};
