import { Client } from "@langchain/langgraph-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { threadId, newState } = await req.json();
    const client = new Client({
      apiUrl: process.env.LANGGRAPH_API_URL as string,
      apiKey: process.env.LANGCHAIN_API_KEY as string,
    });

    await client.threads.updateState(threadId, {
      values: newState,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error creating thread:", error);
    return NextResponse.json(
      { error: "Failed to create thread" },
      { status: 500 }
    );
  }
}
