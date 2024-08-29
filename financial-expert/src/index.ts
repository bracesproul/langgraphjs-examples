// import { graph as stockPurchaserGraph } from "stock_purchaser.js";

/**
 * UNCOMMENT BELOW TO RUN PROGRAMMATICALLY
 */
// const config = { configurable: { thread_id: "1" }, streamMode: "updates" as const };
// const input = {
//   messages: [new HumanMessage("I want to buy 4 shares of AAPL for $228 each.")],
// };

// for await (const event of await stockPurchaserGraph.stream(input, config)) {
//   const key = Object.keys(event)[0];
//   console.log(`Event: ${key}`);

//   if (key === "prepare_purchase_details") {
//     console.log("\n---PREPARING PURCHASE DETAILS---\n")
//     console.log(event);
//   }
// }

// await stockPurchaserGraph.updateState(config, { purchaseConfirmed: true });

// console.log("\n---UPDATED STATE---\n")

// for await (const event of await stockPurchaserGraph.stream(null, config)) {
//   const key = Object.keys(event)[0];
//   console.log(`Event: ${key}`);

//   if (key === "confirm_authorization") {
//     console.log("\n---CONFIRMING AUTHORIZATION---\n")
//     console.log(event);
//   } else if (key === "execute_purchase") {
//     console.log("\n---EXECUTING PURCHASE---\n")
//     console.log(event);
//   }
// }
