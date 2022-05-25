import "https://deno.land/x/dotenv/load.ts";
import { writeJsonSync } from "https://deno.land/x/jsonfile/mod.ts";

const API_URL = Deno.env.get("API_URL");
const API_KEY = Deno.env.get("API_KEY");
const MAX_REQUESTS = parseInt(Deno.env.get("MAX_REQUESTS") || '0', 10);

const responseArray: Record<string, unknown>[] = [];
let cursor;

for (let i = 0; i < MAX_REQUESTS; i++) {
  const tempUrl = `${API_URL}?apikey=${API_KEY}${ cursor ? `&cursor=${cursor}` : '' }`;
  const response = await fetch(tempUrl);
  const jsonData = await response.json();

  console.log("durchgang:" + i);
  console.log({cursor});

  // deno-lint-ignore no-explicit-any
  jsonData?.documents?.forEach((document: any) => {
    const isDocumentRelevant = document?.vorgangsbezug.length > 0 && document.vorgangsbezug[0]?.vorgangsposition.includes("Ordnungsruf");
    if (isDocumentRelevant) {
      responseArray.push(document);
    }
  });

  if(!jsonData.cursor){break;}
  cursor = encodeURIComponent(jsonData.cursor);
}
console.log("Gefundende Ordnungsrufe: " + responseArray.length);

await Deno.mkdir("output", { recursive: true });
const pathAndFileName = `./output/${Date.now()}.json`;
writeJsonSync(pathAndFileName, responseArray);
