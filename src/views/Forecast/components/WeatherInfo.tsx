import React from 'react';
import { format as formatDate } from 'date-fns';

import { Flex, Text } from '../../../atoms';

import { TWeatherForecastInfo } from '../types';

import Degree from './Degree';
import StatusIcon from './StatusIcon';
import InfoSection from './InfoSection';

export default function WeatherInfo(info: TWeatherForecastInfo) {
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Flex alignItems="center" flexGrow={1} padding={4}>
        <StatusIcon cloudiness={info.cloudiness} size="9em" />
      </Flex>

      <Flex alignItems="center" flexGrow={1} padding={4}>
        <InfoSection
          headingLeft={
            <Text color="fg-secondary" fontSize="1.5em">
              {info.status}
            </Text>
          }
          headingRight={
            <Text color="fg-secondary" fontSize="1.5em">
              <Degree temp={info.temperature.celcius.max} /> /{' '}
              <Degree temp={info.temperature.celcius.min} />
            </Text>
          }
        >
          <Flex alignItems="center" justifyContent="center">
            <Text color="fg-primary" fontSize="8em" fontWeight="bold">
              <Degree temp={info.temperature.celcius.selected} />
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
              {info.city}
            </Text>
          }
        >
          <Flex flexDirection="column">
            <Text color="fg-primary" fontSize="2em" fontWeight="bold">
              {formatDate(info.date, 'eeee')}
            </Text>
            <Text color="fg-primary" fontSize="2em" fontWeight="bold">
              {formatDate(info.date, 'dd. MMMM')}
            </Text>
          </Flex>
        </InfoSection>
      </Flex>
    </Flex>
  );
}
