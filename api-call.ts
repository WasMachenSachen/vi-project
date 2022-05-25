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
  // if(!cursor){console.log(response);console.log(jsonData);}

  console.log("durchgang:" + i);
  console.log({cursor});
  // console.log(typeof jsonData.documents);
  // deno-lint-ignore no-explicit-any
  jsonData.documents?.forEach((el: any) => {
    if (el.vorgangsbezug && el.vorgangsbezug[0].vorgangsposition.includes("Ordnungsruf")) {
      // console.log(el);
      responseArray.push(el);
    }
  });
  cursor = encodeURIComponent(jsonData.cursor);
  if(!cursor){break;}
}
console.log("Gefundende Ordnungsrufe: " + responseArray.length);

const pathAndFileName = `./${Date.now()}.json`;
writeJsonSync(pathAndFileName, responseArray);
