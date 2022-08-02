import fetch from "node-fetch";

import config from "./src/config.js";

const total = config.TOTAL_LEAGUES_IN_DIVISION;
const sample = config.LEAGUES_TO_SHOW;
const debug = config.VERBOSE;

const delay = duration => new Promise(resolve => setTimeout(resolve, duration)); 

const fetchHT = async (id, delayTime) => {
  await delay(delayTime);
  const res = await fetch(`https://www.hattrick.org/en-us/World/Series/?LeagueLevelUnitID=${id}`);
  const text = await res.text();

  // "This series is ranked n1 of total"
  const rankText = /<span id="ctl00_ctl00_CPContent_CPMain_lblSeriesRank">(.*)<\/span>/gm.exec(text)[1];
  const rankNumber = rankText.split(" ").at(4);

  return { id, rankNumber };
};

const promises = [];
let timeout = 0;
if (debug) console.log(`Adding promises for each league\n`);
for (let n = 0; n < total; ++n) {
  const id = config.STARTING_ID + n;
  if (timeout >= 5000) timeout = 0;
  timeout += n * 10;
  if (debug) console.log(`Adding promise for league #${id} with a timeout of ${timeout}\n`);
  promises.push(fetchHT(id, timeout));
}

const lastLeagues = [];
try {
  Promise.all(promises).then((leagues) => {
    for (let n = 0; n < leagues.length; ++n) {
      const { id, rankNumber } = leagues[n];
      if (rankNumber > total - sample) {
        lastLeagues.push({ id, position: rankNumber });
      }
    }
    let output = `Hattrick Argentina leagues VI: last ${sample}\n=============================================\n`;
    for (let n = 0; n < lastLeagues.length; ++n) {
      const { id, position } = lastLeagues[n];
      output += `League with ${id} is in position ${position} of ${total}.\n`;
    }
    console.log(output);
  });
} catch (e) {
  console.log(e);
}

