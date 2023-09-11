import loadConfig from "@miroculus/config";

// Country: Argentina
// V: STARTING_ID: 13220, TOTAL_LEAGUES_IN_DIVISION: 256
// VI: STARTING_ID: 26313, TOTAL_LEAGUES_IN_DIVISION: 1024

const config = loadConfig({
  COUNTRY: { type: 'string', default: 'Argentina' },
  LEAGUE_NUMBER: { type: 'string', default: 'V' },
  LEAGUES_TO_SHOW: { type: 'number', default: 10 },
  TOTAL_LEAGUES_IN_DIVISION: { type: 'number', default: 256 },
  SEARCH_TYPE: { type: 'string', default: 'worst' },
  STARTING_ID: { type: 'number', default: 13220 },
  VERBOSE: { type: 'boolean', default: true },
});

export default config;
