import "https://deno.land/x/dotenv/load.ts";
import { writeJsonSync } from "https://deno.land/x/jsonfile/mod.ts";
import { wait } from './helper.ts'

const API_URL = Deno.env.get("API_URL");
const API_KEY = Deno.env.get("API_KEY");
const MAX_REQUESTS = parseInt(Deno.env.get("MAX_REQUESTS") || '0', 10);
const TIMEOUT_IN_SECONDS = parseInt(Deno.env.get("TIMEOUT_IN_SECONDS") || '0', 10);

const responseArray: Record<string, unknown>[] = [];
const cursors: Array<Record<string, number | string>> = [];

let calls = 999999;
let call = 0;
let cursor;

while (call < calls) {

  console.log("durchgang:" + call);
  console.log({cursor});
  const tempUrl = `${API_URL}?apikey=${API_KEY}${ cursor ? `&cursor=${cursor}` : '' }`;
  
  try {
    const response = await fetch(tempUrl);
    const jsonData = await response.json();

    if (call == 0) {
      console.log();
      console.log("===============info================");
      console.log("Found: " + jsonData.numFound + " Documents");
      calls = Math.ceil(jsonData.numFound/100)
      console.log((calls + 1) + " calls needed");
      console.log("===================================");
      console.log();
    }

    call++;
    
    
    // deno-lint-ignore no-explicit-any
    jsonData?.documents?.forEach((document: any) => {
        responseArray.push(document);
    });

    // break if cursor is equal == end
    if(JSON.stringify(jsonData.cursor) == JSON.stringify(cursor)) {break;}
    if(call > calls) {break;}
  
    if(cursor) cursors.push({cursor});
    if(!jsonData.cursor){break;}
    cursor = encodeURIComponent(jsonData.cursor);
    await wait(TIMEOUT_IN_SECONDS);
  } catch(e) {
    console.error(e);
    console.warn('Continue to end gracefully.');
    break;
  }
}

console.log("Personen Ordnungsrufe: " + responseArray.length);

await Deno.mkdir("personen", { recursive: true });
const timeStamp = Date.now();

const pathAndFileName = `./personen/${timeStamp}-data.json`;
writeJsonSync(pathAndFileName, responseArray);