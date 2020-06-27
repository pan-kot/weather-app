import React from 'react';
import { format as formatDate } from 'date-fns';

import { Flex, Text } from '../../../atoms';

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
    <Flex justifyContent="center" flexWrap="wrap">
      <Flex alignItems="center" flexGrow={1} padding={4}>
        <StatusIcon cloudiness={selected.clouds.all} size="9em" />
      </Flex>

      <Flex alignItems="center" flexGrow={1} padding={4}>
        <InfoSection
          headingLeft={
            <Text color="fg-secondary" fontSize="1.5em">
              Clear
            </Text>
          }
          headingRight={
            <Text color="fg-secondary" fontSize="1.5em">
              <Degree temp={summary.maxTemp} /> /{' '}
              <Degree temp={summary.minTemp} />
            </Text>
          }
        >
          <Flex alignItems="center" justifyContent="center">
            <Text color="fg-primary" fontSize="8em" fontWeight="bold">
              <Degree temp={selected.main.temp} />
            </Text>
          </Flex>
        </InfoSection>
      </Flex>

      <Flex
        alignItems="baseline"
        justifyContent="center"
        width={[1, 1 / 3]}
        padding={4}
      >
        <InfoSection
          headingLeft={
            <Text color="fg-secondary" fontSize="1.5em">
              {location}
            </Text>
          }
        >
          <Flex flexDirection="column">
            <Text color="fg-primary" fontSize="2em" fontWeight="bold">
              {formatDate(date, 'eeee')}
            </Text>
            <Text color="fg-primary" fontSize="2em" fontWeight="bold">
              {formatDate(date, 'dd. MMMM')}
            </Text>
          </Flex>
        </InfoSection>
      </Flex>
    </Flex>
  );
}
