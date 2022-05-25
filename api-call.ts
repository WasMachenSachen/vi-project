import "https://deno.land/x/dotenv/load.ts";
import { writeJsonSync } from "https://deno.land/x/jsonfile/mod.ts";

console.log(Deno.env.get("API_KEY"));

const API_URL = "https://search.dip.bundestag.de/api/v1/aktivitaet";
const maxRequests = 2000;
const responseArray: Record<string, unknown>[] = [];

let cursor;
for (let i = 0; i < maxRequests; i++) {
  const tempUrl = `${API_URL}?apikey=${Deno.env.get("API_KEY")}${ cursor ? `&cursor=${cursor}` : '' }`;
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
