import loadConfig from "@miroculus/config";

const config = loadConfig({
  LEAGUES_TO_SHOW: { type: 'number', default: 30 },
  TOTAL_LEAGUES_IN_DIVISION: { type: 'number', default: 1024 },
  STARTING_ID: { type: 'number', default: 26313 },
  VERBOSE: { type: 'boolean', default: false },
});

export default config;
