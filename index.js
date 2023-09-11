import fetch from "node-fetch";

import config from "./src/config.js";

const debug = config.VERBOSE;
const sample = config.LEAGUES_TO_SHOW;
const startingId = config.STARTING_ID;
const total = config.TOTAL_LEAGUES_IN_DIVISION;

const printLine = msg => {
  if (!debug) return;
  console.log(msg);
};

let fetch_number = 1;
let res_number = 1;
const fetchHT = async (id) => {
  const url = `https://www.hattrick.org/en-us/World/Series/?LeagueLevelUnitID=${id}`;
  printLine(`Fetch #${fetch_number} <= ${url}`);
  fetch_number++;
  const res = await fetch(url);
  const text = await res.text();
  // "This series is ranked n1 of total"
  const regRes = /<span id="ctl00_ctl00_CPContent_CPMain_lblSeriesRank">(.*)<\/span>/gm.exec(text);
  if (!regRes) return { id, rankNumber: 0 };
  const rankText = regRes[1];
  const rankNumber = rankText.split(" ")[4];
  printLine(`GOT ${res_number}`);
  res_number++;
  return { id, rankNumber };
};

const leagues = [];
printLine(`Adding promises for each league (${total})`);
for (let n = 0; n < total; ++n) {
  const id = startingId + n;
  printLine(`Promise for league #${id}`);
  const l = await fetchHT(id);
  leagues.push(l);
}

const lastLeagues = [];
try {
  console.log(leagues)
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
} catch (e) {
  console.log(e);
}

