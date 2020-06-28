import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

import { Flex, Text } from '../../../atoms';

import {
  TWeatherForecastTimescale,
  TWeatherForecastTimescaleItem,
} from '../types';

import Degree from './Degree';
import StatusIcon from './StatusIcon';

export default function TimeScale({
  items,
  selectIndex,
}: TWeatherForecastTimescale) {
  return (
    <Flex overflowX="auto">
      {items.map((item, index) => (
        <TimeScaleItem
          key={index}
          item={item}
          onSelect={() => selectIndex(index)}
        />
      ))}
    </Flex>
  );
}

type TTimeScaleProps = {
  item: TWeatherForecastTimescaleItem;
  onSelect: () => void;
};

function TimeScaleItem({ item, onSelect }: TTimeScaleProps) {
  return (
    <ItemButton onClick={onSelect}>
      <Flex flexDirection="column" justifyContent="center" padding={2}>
        <Flex margin={2} justifyContent="center">
          <Text color="fg-secondary" fontSize="1.5em">
            {format(item.date, 'HH:mm')}
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

const ItemButton = styled.button`
  cursor: pointer;

  width: 150px;

  background: none;
  border: none;
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
  }

  transition-property: background;
  transition-duration: 200ms;
`;
