import loadConfig from "@miroculus/config";

const leagues = {
  'arg-V': {
    COUNTRY: 'Argentina',
    NUMBER: 'V',
    STARTING_ID: 13220,
    TOTAL_LEAGUES_IN_DIVISION: 256
  },
  'arg-VI': {
    COUNTRY: 'Argentina',
    NUMBER: 'VI',
    STARTING_ID: 26313,
    TOTAL_LEAGUES_IN_DIVISION: 1024
  }
}

const config = loadConfig({
  LEAGUES_TO_SHOW: { type: 'number', default: 10 },
  SEARCH_TYPE: { type: 'string', default: 'worst' },
  VERBOSE: { type: 'boolean', default: true },

  COUNTRY: { type: 'string' },
  LEAGUE_NUMBER: { type: 'string' },
  TOTAL_LEAGUES_IN_DIVISION: { type: 'number' },
  STARTING_ID: { type: 'number' },
});

const makeConfig = league => {
  const leagueConfig = leagues[league];
  if (!leagueConfig) return null;
  config.COUNTRY = leagueConfig.COUNTRY;
  config.LEAGUE_NUMBER = leagueConfig.NUMBER;
  config.TOTAL_LEAGUES_IN_DIVISION = leagueConfig.TOTAL_LEAGUES_IN_DIVISION;
  config.STARTING_ID = leagueConfig.STARTING_ID;
  return config;
};

export default makeConfig;
