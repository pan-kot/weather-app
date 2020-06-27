import React from 'react';
import { format as formatDate } from 'date-fns';

import { Flex, Box, Text } from '../../../atoms';

import { TWeatherForecast } from '../state/useWeatherForecast';

import Degree from './Degree';
import StatusIcon from './StatusIcon';
import InfoSection from './InfoSection';

export default function WeatherStatus(forecast: TWeatherForecast) {
  const { location, date, selectedForecast: selected, summary } = forecast;

  if (!selected || !summary) {
    throw new Error('Invariant violation: forecast is not ready!');
  }

  return (
    <Flex justifyContent="center">
      <Box minWidth="200px" margin="64px">
        <StatusIcon {...selected} />
      </Box>

      <Box minWidth="200px" margin="64px">
        <InfoSection
          headingLeft={
            <Text color="fg-secondary" size="20px">
              Clear
            </Text>
          }
          headingRight={
            <Text color="fg-secondary" size="20px">
              <Degree temp={summary.maxTemp} /> /{' '}
              <Degree temp={summary.minTemp} />
            </Text>
          }
        >
          <Flex alignItems="center" justifyContent="center">
            <Text bold color="fg-primary" size="160px">
              <Degree temp={selected.main.temp} />
            </Text>
          </Flex>
        </InfoSection>
      </Box>

      <Box minWidth="200px" margin="64px">
        <InfoSection
          headingLeft={
            <Text color="fg-secondary" size="20px">
              {location}
            </Text>
          }
        >
          <Flex column>
            <Text bold color="fg-primary" size="48px">
              {formatDate(date, 'eeee')}
            </Text>
            <Text bold color="fg-primary" size="48px">
              {formatDate(date, 'dd. MMMM')}
            </Text>
          </Flex>
        </InfoSection>
      </Box>
    </Flex>
  );
}
