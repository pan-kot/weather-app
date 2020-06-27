import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

import { TForecastItemDto } from '../../../api/types';
import { Flex, Text } from '../../../atoms';

import { TWeatherForecast } from '../state/useWeatherForecast';

import Degree from './Degree';
import StatusIcon from './StatusIcon';

export default function TimeScale({
  dayForecast,
  selectIndex,
}: TWeatherForecast) {
  return (
    <Flex overflowX="auto">
      {dayForecast.map((item, index) => (
        <TimeScaleItem
          key={item.dt}
          item={item}
          onSelect={() => selectIndex(index)}
        />
      ))}
    </Flex>
  );
}

type TTimeScaleProps = {
  item: TForecastItemDto;
  onSelect: () => void;
};

function TimeScaleItem({ item, onSelect }: TTimeScaleProps) {
  return (
    <ItemButton onClick={onSelect}>
      <Flex flexDirection="column" justifyContent="center" padding={2}>
        <Flex margin={2} justifyContent="center">
          <Text color="fg-secondary" fontSize="1.5em">
            {format(new Date(item.dt * 1000), 'HH:mm')}
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
