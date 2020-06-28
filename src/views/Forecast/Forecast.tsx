import React from 'react';

import { Flex, Box } from '../../atoms';

import useWeatherForecast from './state/useWeatherForecast';
import { TWeatherForecastLoaded } from './types';

import Fallback from './components/Fallback';
import WeatherInfo from './components/WeatherInfo';
import TimeScale from './components/TimeScale';

export default function Forecast() {
  const forecast = useWeatherForecast();

  if (forecast.request.loading || forecast.request.error) {
    return <Fallback />;
  }

  const { info, timescale } = forecast as TWeatherForecastLoaded;

  return (
    <Flex width={1} flexDirection="column" alignItems="center">
      <Box width={['32em', '44em', '56em']} padding={[2, 3, 4]}>
        <WeatherInfo {...info} />
      </Box>

      <Box marginTop={-3}>
        <Box width={['32em', '44em', '56em']} padding={[2, 3, 4]}>
          <TimeScale {...timescale} />
        </Box>
      </Box>
    </Flex>
  );
}
