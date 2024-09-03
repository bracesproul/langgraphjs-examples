import { Client } from "@langchain/langgraph-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { graphId } = data;

    const client = new Client({
      apiUrl: process.env.LANGGRAPH_API_URL as string,
      apiKey: process.env.LANGCHAIN_API_KEY as string,
    });

    const assistant = await client.assistants.create({
      graphId,
    });
    return NextResponse.json(assistant);
  } catch (error) {
    console.error("Error creating thread:", error);
    return NextResponse.json(
      { error: "Failed to create thread" },
      { status: 500 }
    );
  }
}
