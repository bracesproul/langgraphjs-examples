import { Client } from "@langchain/langgraph-sdk";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const client = new Client({
      apiUrl: process.env.LANGGRAPH_API_URL as string,
      apiKey: process.env.LANGCHAIN_API_KEY as string,
    });

    const thread = await client.threads.create();
    return NextResponse.json(thread);
  } catch (error) {
    console.error("Error creating thread:", error);
    return NextResponse.json(
      { error: "Failed to create thread" },
      { status: 500 }
    );
  }
}
