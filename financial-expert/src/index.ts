import { graph as stockPurchaserGraph } from "stock_purchaser.js";
import readline from "readline";
import { StockPurchase } from "tools.js";

async function getUserInput(question: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>((resolve) => {
    rl.question(`\x1b[1m\x1b[37m\x1b[4m${question}\x1b[0m `, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

export async function main() {
  const config = {
    configurable: { thread_id: "1" },
    streamMode: "updates" as const,
  };
  const input = {
    messages: [
      {
        role: "human",
        content: "I want to buy 4 shares of AAPL at the current market rate.",
      },
    ],
  };

  for await (const event of await stockPurchaserGraph.stream(input, config)) {
    const key = Object.keys(event)[0];
    if (key) {
      console.log(`Event: ${key}`);
    }

    if (key === "prepare_purchase_details") {
      console.log("\n---PREPARING PURCHASE DETAILS---\n");
      console.log(event.prepare_purchase_details.requestedStockPurchaseDetails);
      console.log("\n");
    }
  }

  const currentState = await stockPurchaserGraph.getState(config);
  const {
    requestedStockPurchaseDetails,
  }: { requestedStockPurchaseDetails: StockPurchase } = currentState.values;
  const confirmed = await getUserInput(
    `Confirm purchasing ${requestedStockPurchaseDetails.quantity} share(s) of ` +
      `$${requestedStockPurchaseDetails.ticker} at a maximum purchase price of ` +
      `$${requestedStockPurchaseDetails.maxPurchasePrice}/share. (y/n):`
  );

  let userConfirmed = false;
  if (confirmed.trim().toLowerCase() === "y") {
    userConfirmed = true;
  }

  await stockPurchaserGraph.updateState(config, {
    purchaseConfirmed: userConfirmed,
  });

  for await (const event of await stockPurchaserGraph.stream(null, config)) {
    const key = Object.keys(event)[0];
    if (key) {
      console.log(`Event: ${key}`);
    }

    if (key === "execute_purchase") {
      console.log("\n---EXECUTING PURCHASE---\n");
      console.log(event.execute_purchase.messages[0].content);
    }
  }
}

/**
 * UNCOMMENT BELOW TO RUN PROGRAMMATICALLY.
 *
 * To execute this code, run `yarn start` from `./financial-expert`.
 */
// main();
