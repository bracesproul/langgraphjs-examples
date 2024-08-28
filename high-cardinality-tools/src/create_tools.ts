import { loadData, WarData } from "load_data.js";
import { WikipediaQueryRun } from "@langchain/community/tools/wikipedia_query_run";
import { z } from "zod";
import { setTimeout } from "node:timers/promises";
import { Project, SourceFile, VariableDeclarationKind } from "ts-morph";
import fs from "fs";

export function createLangChainTool(
  sourceFile: SourceFile,
  fields: {
    conflictName: string;
    cleanedName: string;
    description: string;
    schema: z.ZodObject<any>;
  }
) {
  // Create the exported object
  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: `${fields.cleanedName}_tool`,
        initializer: `{
  name: "${fields.cleanedName}",
  description: \`${fields.description}\`,
  schema: z.object({
      question: z
        .string()
        .describe(
          \`The question to ask in regards to the ${fields.conflictName} conflict.\`
        ),
    }),
}`,
      },
    ],
  });
}

function createToolFields(data: WarData, wikipediaSummary: string) {
  let cleanedName = data.conflictName
    .split("*")[0] // Remove content including and after '*'
    .trim()
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove all non-alphanumeric characters except spaces
    .toLowerCase()
    .replace(/\s+/g, "_"); // Replace one or more spaces with a single underscore

  // Add an underscore at the beginning if the first character is a number
  if (/^\d/.test(cleanedName)) {
    cleanedName = "_" + cleanedName;
  }

  const description = `Conflict name: ${data.conflictName}
Start date: ${data.startDate}
End date (if applicable): ${data.endDate}

Description: ${wikipediaSummary}`;

  return {
    name: cleanedName,
    description,
    schema: z.object({
      question: z
        .string()
        .describe(
          `The question to ask in regards to the ${data.conflictName}.`
        ),
    }),
  };
}

function updateWikipediaData(content: string, name: string) {
  const dataPath = "data/wikipedia_data.json";
  let data: Record<string, string> = {};
  try {
    data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  } catch (_) {
    // file doesn't exist.
    data = {};
  }
  data[name] = content;
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

export async function createTools() {
  const warData = await loadData();
  // Filter out items which do not have all fields
  const filteredWarData = warData.filter((item) => {
    return item.startDate && item.startDate && item.conflictName;
  });
  console.log(
    "Started with ",
    warData.length,
    " items, filtered down to ",
    filteredWarData.length,
    " items."
  );
  // Load from Wikipedia. If the data is not available, do not include the tool.
  const wikipediaTool = new WikipediaQueryRun({
    topKResults: 1,
    maxDocContentLength: 20000,
  });

  // New ts-morph project for writing the tools.ts file
  const project = new Project();
  // Create a new `tools.ts` file, then add the Zod import.
  const sourceFile = project.createSourceFile(`src/tools.ts`, "", {
    overwrite: true,
  });
  sourceFile.addImportDeclaration({
    moduleSpecifier: "zod",
    namedImports: ["z"],
  });
  let toolNames: string[] = [];
  for await (const item of filteredWarData) {
    await setTimeout(500); // Wait for 500ms to avoid rate limiting
    const cleanedName = item.conflictName.split("*")[0].trim();
    const wikipediaData = await wikipediaTool.invoke(cleanedName);

    const toolFields = createToolFields(item, wikipediaData);
    toolNames.push(`${toolFields.name}_tool`);
    createLangChainTool(sourceFile, {
      conflictName: item.conflictName,
      cleanedName: toolFields.name,
      description: toolFields.description,
      schema: toolFields.schema,
    });
    updateWikipediaData(wikipediaData, `${toolFields.name}_tool`);
  }

  // Export all tools.
  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "ALL_TOOLS",
        initializer: `[${toolNames.join(", ")}]`,
      },
    ],
    isExported: true,
  });

  await sourceFile.save();
}
