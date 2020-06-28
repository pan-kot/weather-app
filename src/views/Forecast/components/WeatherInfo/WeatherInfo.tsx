import React from 'react';

import { Flex } from '../../../../atoms';

import { TWeatherForecastInfo } from '../../types';

import StatusIcon from '../StatusIcon';

import TemperatureInfo from './TemperatureInfo';
import RequestInfo from './RequestInfo';

export default function WeatherInfo(info: TWeatherForecastInfo) {
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Flex alignItems="center" flexGrow={1} padding={4}>
        <StatusIcon cloudiness={info.cloudiness} size="9em" />
      </Flex>

      <Flex alignItems="center" flexGrow={1} padding={4}>
        <TemperatureInfo {...info} />
      </Flex>

      <Flex
        alignItems="baseline"
        justifyContent="center"
        width={[1, 1 / 3]}
        padding={4}
      >
        <RequestInfo {...info} />
      </Flex>
    </Flex>
  );
}
