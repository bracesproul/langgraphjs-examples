import { z } from "zod";
import { tool } from "@langchain/core/tools";
import type {
  BalanceSheetsResponse,
  CashFlowStatementsResponse,
  CompanyFactsResponse,
  IncomeStatementsResponse,
  SnapshotResponse,
} from "types.js";
import { createReactAgent, ToolNode } from "@langchain/langgraph/prebuilt";
import { callFinancialDatasetAPI } from "utils.js";
import {
  Annotation,
  END,
  messagesStateReducer,
  START,
  StateGraph,
} from "@langchain/langgraph";
import { BaseMessage, SystemMessage } from "@langchain/core/messages";
// import { ChatAnthropic } from "@langchain/anthropic";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { ChatOpenAI } from "@langchain/openai";

const incomeStatementsTool = tool(
  async (input) => {
    try {
      const data = await callFinancialDatasetAPI<IncomeStatementsResponse>({
        endpoint: "/financials/income-statements",
        params: {
          ticker: input.ticker,
          period: input.period ?? "annual",
          limit: input.limit.toString() ?? "5",
        },
      });
      return JSON.stringify(data, null);
    } catch (e: any) {
      console.warn("Error fetching income statements", e.message);
      return `An error occurred while fetching income statements: ${e.message}`;
    }
  },
  {
    name: "income_statements",
    description:
      "Retrieves income statements for a specified company, showing detailed financial performance over a chosen time period. The output includes key metrics such as revenue, expenses, profits, and per-share data. Specifically, it provides: ticker, date, period type, revenue, cost of revenue, gross profit, operating expenses, income figures (operating, net, EBIT), tax expenses, earnings per share (basic and diluted), dividends per share, and share count information.",
    schema: z.object({
      ticker: z.string().describe("The ticker of the stock. Example: 'AAPL'"),
      period: z
        .enum(["annual", "quarterly", "ttm"])
        .describe("The time period of the income statement. Example: 'annual'")
        .optional()
        .default("annual"),
      limit: z
        .number()
        .int()
        .positive()
        .describe("The number of income statements to return. Example: 5")
        .optional()
        .default(5),
    }),
  }
);

const balanceSheetsTool = tool(
  async (input) => {
    try {
      const data = await callFinancialDatasetAPI<BalanceSheetsResponse>({
        endpoint: "/financials/balance-sheets",
        params: {
          ticker: input.ticker,
          period: input.period ?? "annual",
          limit: input.limit.toString() ?? "5",
        },
      });
      return JSON.stringify(data, null);
    } catch (e: any) {
      console.warn("Error fetching balance sheets", e.message);
      return `An error occurred while fetching balance sheets: ${e.message}`;
    }
  },
  {
    name: "balance_sheets",
    description:
      "Fetches balance sheets for a given company, providing a snapshot of its financial position at specific points in time. The output includes detailed information on assets (total, current, non-current), liabilities (total, current, non-current), and shareholders' equity. Specific data points include cash and equivalents, inventory, investments, property/plant/equipment, goodwill, debt, payables, retained earnings, and more. The result is a JSON stringified object containing an array of balance sheets.",
    schema: z.object({
      ticker: z.string().describe("The ticker of the stock. Example: 'AAPL'"),
      period: z
        .enum(["annual", "quarterly", "ttm"])
        .describe("The time period of the balance sheet. Example: 'annual'")
        .optional()
        .default("annual"),
      limit: z
        .number()
        .int()
        .positive()
        .describe("The number of balance sheets to return. Example: 5")
        .optional()
        .default(5),
    }),
  }
);

const cashFlowStatementsTool = tool(
  async (input) => {
    try {
      const data = await callFinancialDatasetAPI<CashFlowStatementsResponse>({
        endpoint: "/financials/cash-flow-statements",
        params: {
          ticker: input.ticker,
          period: input.period ?? "annual",
          limit: input.limit.toString() ?? "5",
        },
      });
      return JSON.stringify(data, null);
    } catch (e: any) {
      console.warn("Error fetching cash flow statements", e.message);
      return `An error occurred while fetching cash flow statements: ${e.message}`;
    }
  },
  {
    name: "cash_flow_statements",
    description:
      "Obtains cash flow statements for a company, detailing the inflows and outflows of cash from operating, investing, and financing activities. The result is a JSON stringified object containing an array of cash flow statements. Each statement includes: ticker, date, report period, net cash flows from operations/investing/financing, depreciation and amortization, share-based compensation, capital expenditure, business and investment acquisitions/disposals, debt and equity issuances/repayments, dividends, change in cash and equivalents, and effect of exchange rate changes.",
    schema: z.object({
      ticker: z.string().describe("The ticker of the stock. Example: 'AAPL'"),
      period: z
        .enum(["annual", "quarterly", "ttm"])
        .describe("The period of the cash flow statement. Example: 'annual'")
        .optional()
        .default("annual"),
      limit: z
        .number()
        .int()
        .positive()
        .describe("The number of cash flow statements to return. Example: 5")
        .optional()
        .default(5),
    }),
  }
);

const companyFactsTool = tool(
  async (input) => {
    try {
      const data = await callFinancialDatasetAPI<CompanyFactsResponse>({
        endpoint: "/company/facts",
        params: {
          ticker: input.ticker,
        },
      });
      return JSON.stringify(data, null);
    } catch (e: any) {
      console.warn("Error fetching company facts", e.message);
      return `An error occurred while fetching company facts: ${e.message}`;
    }
  },
  {
    name: "company_facts",
    description:
      "Provides key facts and information about a specified company. The result is a JSON stringified object containing details such as: ticker symbol, company name, CIK number, market capitalization, number of employees, SIC code and description, website URL, listing date, and whether the company is currently active.",
    schema: z.object({
      ticker: z.string().describe("The ticker of the company. Example: 'AAPL'"),
    }),
  }
);

const priceSnapshotTool = tool(
  async (input) => {
    try {
      const data = await callFinancialDatasetAPI<SnapshotResponse>({
        endpoint: "/prices/snapshot",
        params: {
          ticker: input.ticker,
        },
      });
      return JSON.stringify(data, null);
    } catch (e: any) {
      console.warn("Error fetching price snapshots", e.message);
      return `An error occurred while fetching price snapshots: ${e.message}`;
    }
  },
  {
    name: "price_snapshot",
    description:
      "Retrieves the current stock price and related market data for a given company. The snapshot includes the current price, ticker symbol, day's change in price and percentage, timestamp of the data, and a nanosecond-precision timestamp.",
    schema: z.object({
      ticker: z.string().describe("The ticker of the company. Example: 'AAPL'"),
    }),
  }
);

const webSearchTool = new TavilySearchResults({
  maxResults: 2,
});

const GraphAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [],
  }),
});

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

// LangGraph Studio fails to stream with Anthropic.
// const llm = new ChatAnthropic({
//   model: "claude-3-5-sonnet-20240620",
//   temperature: 0,
// });
const llm = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
});

const tools = [
  incomeStatementsTool,
  balanceSheetsTool,
  cashFlowStatementsTool,
  companyFactsTool,
  priceSnapshotTool,
  webSearchTool,
];

const systemMessage =
  new SystemMessage(`You're an expert financial analyst, tasked with answering the users questions about a given company or companies.
You do not have up to date information on the companies, so you much call tools when answering users questions.
All finical data tools require a company ticker to be passed in as a parameter. If you do not know the ticker, you should use the webs search tool to find it.`);

const agent = createReactAgent({
  llm,
  tools,
  messageModifier: systemMessage,
});
const toolNode = new ToolNode<typeof GraphAnnotation.State>(tools);

const workflow = new StateGraph(GraphAnnotation)
  .addNode("agent", agent)
  .addEdge(START, "agent")
  .addNode("tools", toolNode)
  .addConditionalEdges("agent", shouldContinue)
  .addEdge("tools", "agent");

export const graph = workflow.compile();
