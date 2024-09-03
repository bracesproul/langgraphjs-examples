import { Client } from "@langchain/langgraph-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { threadId } = await req.json();
    const client = new Client({
      apiUrl: process.env.LANGGRAPH_API_URL as string,
      apiKey: process.env.LANGCHAIN_API_KEY as string,
    });

    const currentState = await client.threads.getState(threadId);

    return NextResponse.json(currentState);
  } catch (error) {
    console.error("Error creating thread:", error);
    return NextResponse.json(
      { error: "Failed to create thread" },
      { status: 500 }
    );
  }
}
