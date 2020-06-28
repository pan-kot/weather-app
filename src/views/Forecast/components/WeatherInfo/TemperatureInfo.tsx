import React from 'react';

import { Flex, Text } from '../../../../atoms';

import { TWeatherForecastInfo } from '../../types';

import Degree from '../Degree';

import InfoSection from './InfoSection';

export default function TemperatureInfo(info: TWeatherForecastInfo) {
  return (
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
  );
}
