import { NextRequest, NextResponse } from "next/server";
import { Client } from "@langchain/langgraph-sdk";

export async function POST(req: NextRequest) {
  const {
    threadId,
    assistantId,
    message,
    model,
    userId,
    systemInstructions,
    messageId,
    streamMode = "messages",
  } = await req.json();

  const client = new Client({
    apiUrl: process.env.LANGGRAPH_API_URL as string,
    apiKey: process.env.LANGCHAIN_API_KEY as string,
  });

  let input: Record<string, any> | null = null;
  if (message !== null) {
    input = {
      messages: [
        {
          id: messageId,
          role: "human",
          content: message,
        },
      ],
      userId: userId,
    };
  }

  const config = {
    configurable: {
      model_name: model,
      system_instructions: systemInstructions,
    },
  };

  const stream = client.runs.stream(threadId, assistantId, {
    input,
    config,
    streamMode,
  });

  const encoder = new TextEncoder();

  const responseStream = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        console.log(event);
        controller.enqueue(encoder.encode(JSON.stringify(event)));
      }

      controller.close();
    },
  });

  return new NextResponse(responseStream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
