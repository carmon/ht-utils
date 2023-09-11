import loadConfig from "@miroculus/config";

const config = loadConfig({
  LEAGUES_TO_SHOW: { type: 'number', default: 10 },
  TOTAL_LEAGUES_IN_DIVISION: { type: 'number', default: 256 },
  STARTING_ID: { type: 'number', default: 13220 },
  VERBOSE: { type: 'boolean', default: true },
});

export default config;
