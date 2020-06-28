import React from 'react';
import { format as formatDate } from 'date-fns';

import { Flex, Text } from '../../../../atoms';

import { TWeatherForecastTimescaleItem } from '../../types';

import Degree from '../Degree';
import StatusIcon from '../StatusIcon';

import { ItemButton } from './Styled';

type TTimeScaleItemProps = {
  item: TWeatherForecastTimescaleItem;
  onSelect: () => void;
};

export default function TimeScaleItem({ item, onSelect }: TTimeScaleItemProps) {
  return (
    <ItemButton onClick={onSelect}>
      <Flex flexDirection="column" justifyContent="center" padding={2}>
        <Flex margin={2} justifyContent="center">
          <Text color="fg-secondary" fontSize="1.5em">
            {formatDate(item.date, 'HH:mm')}
          </Text>
        </Flex>

        <Flex margin={2} justifyContent="center">
          <StatusIcon cloudiness={item.cloudiness} size="4em" />
        </Flex>

        <Flex margin={2} justifyContent="center">
          <Text color="fg-primary" fontWeight="bold" fontSize="2.5em">
            <Degree temp={item.temperature.celcius} />
          </Text>
        </Flex>
      </Flex>
    </ItemButton>
  );
}
