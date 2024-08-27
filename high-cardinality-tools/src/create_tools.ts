import { loadData } from "load_data.js";
import { WikipediaQueryRun } from "@langchain/community/tools/wikipedia_query_run";

export async function createTools() {
  const warData = await loadData();
  // Filter out items which do not have all fields
  const filteredWarData = warData.filter((item) => {
    return item.startDate && item.startDate && item.conflictName;
  });
  console.log("Started with ", warData.length, " items, filtered down to ", filteredWarData.length, " items.");
  // Load from Wikipedia. If the data is not available, do not include the tool.
  const wikipediaTool = new WikipediaQueryRun({
    topKResults: 1,
  })
  const subset = filteredWarData.slice(0, 10);
  for await (const item of subset) {
    const cleanedName = item.conflictName.split("*")[0].trim();
    const wikipediaData = await wikipediaTool.invoke(cleanedName);
    console.log(wikipediaData);
  }
}
