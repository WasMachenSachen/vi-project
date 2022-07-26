import "https://deno.land/x/dotenv/load.ts";
import { writeJsonSync } from "https://deno.land/x/jsonfile/mod.ts";
import { wait } from './helper.ts'

const API_URL = Deno.env.get("API_URL");
const API_KEY = Deno.env.get("API_KEY");
const MAX_REQUESTS = parseInt(Deno.env.get("MAX_REQUESTS") || '0', 10);
const TIMEOUT_IN_SECONDS = parseInt(Deno.env.get("TIMEOUT_IN_SECONDS") || '0', 10);

const FROM : number = parseInt(Deno.env.get("FROM") || '0', 10);
const TO : number = parseInt(Deno.env.get("TO") || '0', 10);

let year = 0;
let hits = 0;

while (year <= TO) {

  let cursor;
  let calls = 999999;

  const responseArray: Record<string, unknown>[] = [];
  const cursors: Array<Record<string, number | string>> = [];

  if (year < FROM)
    year = FROM;

  console.log();
  console.log("===============year================");
  console.log(year);
  console.log("===================================");

  let startCall = `${year}-01-01`;
  let endCall   = `${year}-12-31`;

  let iteration = 0;

  while (true) {
    console.log("durchgang:" + iteration);

    const tempUrl = `${API_URL}?apikey=${API_KEY}&f.datum.end=${endCall}&f.datum.start=${startCall}${ cursor ? `&cursor=${cursor}` : '' }&f.zuordnung=BT`;

    try {
      const response = await fetch(tempUrl);
      const jsonData = await response.json();

      if (iteration == 0) {
        console.log();
        console.log("===============info================");
        console.log("Found: " + jsonData.numFound + " Documents");
        calls = Math.ceil(jsonData.numFound/100)
        console.log((calls + 1) + " calls needed");
        console.log("===================================");
        console.log();
      }

      if (iteration % 10 == 0) {
        console.log();
        console.log("===============info================");
        console.log("old cursor: " + JSON.stringify(cursor));
        console.log("new cursor: " + JSON.stringify(jsonData.cursor));
        console.log("is equal =  " + (JSON.stringify(jsonData.cursor) == JSON.stringify(cursor)));
        console.log("===================================");
        console.log();
      }

      jsonData?.documents?.forEach((document: any) => {
        const isDocumentRelevant = document?.text?.length > 0 && (document.text?.toLowerCase().includes("zur ordnung") || document.text?.toLowerCase().includes("ordnungsruf"));
        // const isDocumentRelevant = document?.text?.length > 0 && (document.text?.toLowerCase().includes("verwarnung"));
      
        let text = "Te-\nst";

        const cleanText = document.text
              .replace('-\n', '')
              .replace(' -\n ', '')
              .replace('-\n ', '')
              .replace(' -\n', '');

        if (isDocumentRelevant) {

          // fügt arrays aus rufen zusammen (text in lowercase)
          let positions = countOrders(cleanText, "zur ordnung").concat(countOrders(cleanText, "ordnungsruf"))
          // let positions = countOrders(document.text, "verwarnung")
          
          // gibt ein array mit possitionen von wörtern (search) aus eine text (text) zurrück
          function countOrders(text: string, search: string) {
            let positions: any[] = [];
            let curent = text.toLowerCase().indexOf(search);       

            while (curent != -1) {
              positions.push(curent);

              curent = text.toLowerCase().indexOf(search, curent + 1);
            }

            return positions;
          }

          positions.forEach((order: any) => {
            const caracterRange = 1000;

            let ruf = document.text.substring(order - caracterRange, order + caracterRange)
            
            let response = {
              "id": document.id,
              "date": document.datum,
              "wp": document.wahlperiode,
              "titel": document.titel,
              "ruf": ruf,
              "fundstelle": document.fundstelle,
            }

            responseArray.push(response);
          });
        }
      });

      // break if cursor is equal == end
      if(JSON.stringify(jsonData.cursor) == JSON.stringify(cursor)) {break;}
      if(iteration > calls) {break;}
      
      // responseArray.push(jsonData);
    
      if(cursor) cursors.push({iteration, cursor});
      if(!jsonData.cursor){break;}
      cursor = encodeURIComponent(jsonData.cursor);
      await wait(TIMEOUT_IN_SECONDS);
    } catch(e) {
      console.error(e);
      console.warn('Continue to end gracefully.');
      break;
    }

    iteration++;
  }

  console.log("Gefundende Ordnungsrufe: " + responseArray.length);
  hits += responseArray.length;

  await Deno.mkdir("dummer-output", { recursive: true });
  const timeStamp = Date.now();

  const pathAndFileName = `./dummer-output/${year}-${timeStamp}-data.json`;
  writeJsonSync(pathAndFileName, responseArray);



  year++;

}

console.log();
console.log("================end================");
console.log(`Insgesamt von ${FROM} bis ${TO} gefundene Rufe: ${hits}`);

