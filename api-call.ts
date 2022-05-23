import "https://deno.land/x/dotenv/load.ts";
import { writeJsonSync } from "https://deno.land/x/jsonfile/mod.ts";

console.log(Deno.env.get("API_KEY"));

const API_URL = "https://search.dip.bundestag.de/api/v1/aktivitaet";
const maxRequests = 100;
let responseArray: object[] = [];

let cursor;
for (let i = 0; i < maxRequests; i++) {
  let tempUrl = `${API_URL}?apikey=${Deno.env.get("API_KEY")}`;
  if (cursor) {
    tempUrl = `${API_URL}?apikey=${Deno.env.get("API_KEY")}&cursor=${cursor}`;
  }

  const response = await fetch(tempUrl);
  const jsonData = await response.json();
  console.log("durchgang:" + i);
  console.log({cursor});
  console.log(typeof jsonData.documents);
  jsonData.documents?.forEach((el: any) => {
    if (el.vorgangsbezug[0].vorgangsposition.includes("Ordnungsruf")) {
      // console.log(el);
      responseArray.push(el);
    }
  });
  cursor = jsonData.cursor;
}
console.log(responseArray.length);

const pathAndFileName = `./${Date.now()}.json`;
writeJsonSync(pathAndFileName, responseArray);
