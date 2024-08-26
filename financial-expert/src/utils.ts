export async function callFinancialDatasetAPI<
  Output extends Record<string, any> = Record<string, any>
>(fields: {
  endpoint: string;
  params: Record<string, string>;
}): Promise<Output> {
  if (!process.env.FINANCIAL_DATASETS_API_KEY) {
    throw new Error("FINANCIAL_DATASETS_API_KEY is not set");
  }

  const baseURL = "https://api.financialdatasets.ai";
  const queryParams = new URLSearchParams(fields.params).toString();
  const url = `${baseURL}${fields.endpoint}?${queryParams}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.FINANCIAL_DATASETS_API_KEY,
    },
  });

  if (!response.ok) {
    let res: string;
    try {
      res = JSON.stringify(await response.json(), null, 2);
    } catch (_) {
      try {
        res = await response.text();
      } catch (_) {
        res = response.statusText;
      }
    }
    throw new Error(
      `Failed to fetch data from ${fields.endpoint}.\nResponse: ${res}`
    );
  }
  const data = await response.json();
  return data;
}
