import csv from "csv-parser";
import fs from "node:fs";
import { setTimeout } from "node:timers/promises";

export interface WarData {
  startDate: string;
  endDate: string;
  conflictName: string;
  victoriousParty?: string;
  defeatedParty?: string;
}

export async function loadData() {
  const data_2003_2009 = "data/list_of_wars_2003_2009.csv";
  let data_2003_2009_loaded = false;
  const data_2010_2019 = "data/list_of_wars_2010_2019.csv";
  let data_2010_2019_loaded = false;
  const data_2019_present = "data/list_of_wars_2019_present.csv";
  let data_2019_present_loaded = false;

  const results: WarData[] = [];

  fs.createReadStream(data_2003_2009)
    .pipe(csv())
    .on("data", (data) =>
      results.push({
        startDate: data.Started,
        endDate: data.Ended,
        conflictName: data["Name of conflict"],
        victoriousParty: data["Belligerents"],
        defeatedParty: data[""],
      })
    )
    .on("end", () => {
      data_2003_2009_loaded = true;
    });
  fs.createReadStream(data_2010_2019)
    .pipe(csv())
    .on("data", (data) =>
      results.push({
        startDate: data.Started,
        endDate: data.Ended,
        conflictName: data["Name of conflict"],
        victoriousParty: data["Belligerents"],
        defeatedParty: data[""],
      })
    )
    .on("end", () => {
      data_2010_2019_loaded = true;
    });
  fs.createReadStream(data_2019_present)
    .pipe(csv())
    .on("data", (data) =>
      results.push({
        startDate: data.Started,
        endDate: data.Ended,
        conflictName: data["Name of conflict"],
        victoriousParty: data["Belligerents"],
        defeatedParty: data[""],
      })
    )
    .on("end", () => {
      data_2019_present_loaded = true;
    });

  while (
    !data_2003_2009_loaded ||
    !data_2010_2019_loaded ||
    !data_2019_present_loaded
  ) {
    await setTimeout(100);
  }

  return results;
}
