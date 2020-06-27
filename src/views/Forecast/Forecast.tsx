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
    <Flex width={1} flexDirection="column" alignItems="center">
      <Box width={['32em', '44em', '56em']} padding={[2, 3, 4]}>
        <WeatherStatus {...forecast} />
      </Box>

      <Box marginTop={-3}>
        <Box width={['32em', '44em', '56em']} padding={[2, 3, 4]}>
          <TimeScale {...forecast} />
        </Box>
      </Box>
    </Flex>
  );
}
