import React from 'react';

import { TForecastItemDto } from '../../../api/types';
import { Flex, Box, Text } from '../../../atoms';

import { TWeatherForecast } from '../state/useWeatherForecast';

import Degree from './Degree';
import StatusIcon from './StatusIcon';

export default function TimeScale({ dayForecast }: TWeatherForecast) {
  return (
    <Flex overflowX="auto">
      {dayForecast.map((it) => (
        <TimeScaleItem key={it.dt} {...it} />
      ))}
    </Flex>
  );
}

function TimeScaleItem(item: TForecastItemDto) {
  return (
    <Flex
      width={150}
      flexDirection="column"
      justifyContent="center"
      padding={2}
    >
      <Flex margin={2} justifyContent="center">
        <Text color="fg-secondary" fontSize="1.5em">
          12:00
        </Text>
      </Flex>

      <Flex margin={2} justifyContent="center">
        <StatusIcon cloudiness={item.clouds.all} size="4em" />
      </Flex>

      <Flex margin={2} justifyContent="center">
        <Text color="fg-primary" fontWeight="bold" fontSize="2.5em">
          <Degree temp={item.main.temp} />
        </Text>
      </Flex>
    </Flex>
  );
}
