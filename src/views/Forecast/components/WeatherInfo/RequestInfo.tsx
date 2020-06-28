import React from 'react';
import { format as formatDate } from 'date-fns';

import { Flex, Text } from '../../../../atoms';

import { TWeatherForecastInfo } from '../../types';

import InfoSection from './InfoSection';

export default function RequestInfo(info: TWeatherForecastInfo) {
  return (
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
  );
}
