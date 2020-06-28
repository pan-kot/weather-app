import React from 'react';

import { Flex } from '../../../../atoms';

import { TWeatherForecastTimescale } from '../../types';

import TimeScaleItem from './TimeScaleItem';

export default function TimeScale({
  items,
  selectIndex,
}: TWeatherForecastTimescale) {
  return (
    <Flex overflowX="auto">
      {items.map((item, index) => (
        <TimeScaleItem
          key={item.date.getTime()}
          item={item}
          // eslint-disable-next-line react/jsx-no-bind
          onSelect={() => selectIndex(index)}
        />
      ))}
    </Flex>
  );
}
