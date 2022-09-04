import "https://deno.land/x/dotenv/load.ts";
import { writeJsonSync } from "https://deno.land/x/jsonfile/mod.ts";
import { wait } from './helper.ts'

const API_URL = Deno.env.get("API_URL");
const API_KEY = Deno.env.get("API_KEY");
const MAX_REQUESTS = parseInt(Deno.env.get("MAX_REQUESTS") || '0', 10);
const TIMEOUT_IN_SECONDS = parseInt(Deno.env.get("TIMEOUT_IN_SECONDS") || '0', 10);

const responseArray: Record<string, unknown>[] = [];
const cursors: Array<Record<string, number | string>> = [];

let cursor;

if(Deno.env.get("START_AT_CURSOR")) cursor = Deno.env.get("START_AT_CURSOR");

for (let i = 0; i < MAX_REQUESTS; i++) {
  console.log("durchgang:" + i);
  console.log({cursor});
  const tempUrl = `${API_URL}?apikey=${API_KEY}${ cursor ? `&cursor=${cursor}` : '' }`;
  
  try {
    const response = await fetch(tempUrl);
    const jsonData = await response.json();

    
    // deno-lint-ignore no-explicit-any
    jsonData?.documents?.forEach((document: any) => {
      const isDocumentRelevant = document?.vorgangsbezug?.length > 0 && document.vorgangsbezug[0]?.vorgangsposition.includes("Ordnungsruf");
      if (isDocumentRelevant) {
        responseArray.push(document);
      }
    });
  
    if (cursor) cursors.push({i, cursor});
    if (!jsonData.cursor){break;}
    if (cursor === jsonData.cursor){break;}
    cursor = encodeURIComponent(jsonData.cursor);
    await wait(TIMEOUT_IN_SECONDS);
  } catch(e) {
    console.error(e);
    console.warn('Continue to end gracefully.');
    break;
  }
}

console.log("Gefundende Ordnungsrufe: " + responseArray.length);

await Deno.mkdir("output", { recursive: true });
const timeStamp = Date.now();

const pathAndFileName = `./output/${timeStamp}-data.json`;
writeJsonSync(pathAndFileName, responseArray);

const pathAndFileNameCursors = `./output/${timeStamp}-cursors.json`;
writeJsonSync(pathAndFileNameCursors, cursors);