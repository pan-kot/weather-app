import React from 'react';

import useWeatherForecast from './state/useWeatherForecast';

import { Flex, Box } from '../../atoms';

import Fallback from './components/Fallback';
import WeatherStatus from './components/WeatherStatus';
import TimeScale from './components/TimeScale';

export default function Forecast() {
  const forecast = useWeatherForecast();

  if (forecast.loading || forecast.error) {
    return <Fallback />;
  }

  return (
    <Flex column width={1} alignItems="center">
      <Box padding="96px">
        <WeatherStatus {...forecast} />
      </Box>

      <Box>
        <TimeScale />
      </Box>
    </Flex>
  );
}
