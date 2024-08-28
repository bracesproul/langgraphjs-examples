import { z } from "zod";
import { tool } from "@langchain/core/tools";
import { ALL_TOOLS } from "tools.js";
import {
  Annotation,
  CompiledStateGraph,
  END,
  messagesStateReducer,
  START,
  StateGraph,
} from "@langchain/langgraph";
import { BaseMessage, HumanMessage, RemoveMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { Document } from "@langchain/core/documents";
import {
  PGVectorStore,
  DistanceStrategy,
} from "@langchain/community/vectorstores/pgvector";
import { PoolConfig } from "pg";
import { ParentDocumentRetriever } from "langchain/retrievers/parent_document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { InMemoryDocstore } from "langchain/stores/doc/in_memory";
import { LocalFileStore } from "langchain/storage/file_system";
import { v4 as uuidv4 } from "uuid";

/**
 * Steps:
 * 1. Expand on the query
 * 2. Call parent document retriever to get 15 relevant tools
 * 3. Bind relevant tools to model, along with an additional tool the model should call if it doesn't think any of the 15 tools are relevant
 */

const DOCSTORE_PATH = "./data/docstore";

async function createParentDocRetriever() {
  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-large",
  });
  const config = {
    postgresConnectionOptions: {
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      user: "myuser",
      password: "ChangeMe",
      database: "api",
    } as PoolConfig,
    tableName: "high_cardinality_tools",
    columns: {
      idColumnName: "id",
      vectorColumnName: "vector",
      contentColumnName: "content",
      metadataColumnName: "metadata",
    },
    // supported distance strategies: cosine (default), innerProduct, or euclidean
    distanceStrategy: "cosine" as DistanceStrategy,
  };

  const vectorstore = await PGVectorStore.initialize(embeddings, config);
  const byteStore = await LocalFileStore.fromPath(DOCSTORE_PATH)

  const retriever = new ParentDocumentRetriever({
    vectorstore,
    byteStore,
    // Optional, not required if you're already passing in split documents
    parentSplitter: new RecursiveCharacterTextSplitter({
      chunkOverlap: 500,
      chunkSize: 1500,
    }),
    childSplitter: new RecursiveCharacterTextSplitter({
      chunkOverlap: 250,
      chunkSize: 500,
    }),
    childK: 20,
    parentK: 15,
  });

  return retriever;
}

const GraphAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [],
  }),
  retriever: Annotation<ParentDocumentRetriever>,
  documents: Annotation<Document[]>({
    reducer: (state, documents) => state.concat(documents),
    default: () => [],
  }),
});

const llm = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
});

const expandQuery = async (state: typeof GraphAnnotation.State) => {
  const { messages } = state;
  const lastMessage = messages[messages.length - 1];
  if (lastMessage._getType() !== "human") {
    throw new Error("Expected last message to be a human message in expandQuery");
  }
  if (!lastMessage.id) {
    throw new Error("Expected last message to have an id in expandQuery");
  }
  const expandQueryPrompt = new SystemMessage(`You're a world class historian, tasked with assisting the user in their research.
The user will present you with a question, and your ONLY job is to re-write it to be more focused, clearer, and specific.
This new query will be used in a semantic search of Wikipedia articles, so ensure the query is well formatted to do so.
ONLY respond with the new query. Do not provide any additional information or context.`);
  
  const expandedQuery = await llm.invoke([expandQueryPrompt, lastMessage]);
  // remove the last message from the array
  const removeMessage = new RemoveMessage({ id: lastMessage.id });
  // Create a new human message with the expanded query to replace the original message.
  const expandedQueryHumanMessage = new HumanMessage({ content: expandedQuery.content, id: uuidv4() });
  return { messages: [removeMessage, expandedQueryHumanMessage] };
}

const retrieveDocuments = async (state: typeof GraphAnnotation.State) => {
  const { retriever, messages } = state;
  const lastMessage = messages[messages.length - 1];
  if (lastMessage._getType() !== "human") {
    throw new Error("Expected last message to be a human message in retrieveDocuments");
  }
  if (typeof lastMessage.content !== "string") {
    throw new Error("Expected last message to have string content in retrieveDocuments");
  }
  const documents = await retriever.invoke(lastMessage.content);

  return { documents };
};

const findToolFromDocuments = async (state: typeof GraphAnnotation.State) => {
  // given the documents, map them to the tools, split the descriptions, pass to LLM. Include additional tool `wikipediaTool`. Prompt the LLM to select this tool if none of the other tools include the answer.
  // If wikipedia tool is selected, search wikipedia for the answer. Then, given the answer, split the first 100 characters and do a simple `.includes` over all tools to see if it exists. If not, return the wikipedia answer.
}

const shouldContinue = (
  state: typeof GraphAnnotation.State
): "tools" | typeof END => {
  const { messages } = state;

  const lastMessage = messages[messages.length - 1];
  if (
    "tool_calls" in lastMessage &&
    Array.isArray(lastMessage.tool_calls) &&
    lastMessage.tool_calls?.length
  ) {
    return "tools";
  }
  return END;
};

async function createGraph() {
  const retriever = await createParentDocRetriever();
  
  if (process.env.SHOULD_INGEST_DOCS === "true") {
    const parentDocuments = ALL_TOOLS.map((tool) => new Document({
      pageContent: tool.description,
      metadata: {
        name: tool.name,
      }
    }));
    await retriever.addDocuments(parentDocuments);
  }

  const workflow = new StateGraph(GraphAnnotation)
    .addNode("expandQuery", expandQuery)
    .addEdge(START, "expandQuery")
    .addNode("retrieveDocuments", retrieveDocuments)
    .addEdge("expandQuery", "retrieveDocuments")
    .addNode("tools", toolNode);

  const graph: CompiledStateGraph<
    typeof GraphAnnotation.State,
    Partial<typeof GraphAnnotation.State>,
    typeof START | "agent" | "tools"
  > = workflow.compile();
}