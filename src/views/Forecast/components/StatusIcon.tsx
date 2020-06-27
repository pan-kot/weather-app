import React from 'react';

import { WeatherSun, WeatherCloud } from '../../../icons';

import { TForecastItemDto } from '../../../api/types';

import { CLOUDS_THRESHOLD } from '../state/constants';

export default function StatusIcon({
  clouds: { all: cloudiness },
}: TForecastItemDto) {
  if (cloudiness > CLOUDS_THRESHOLD) {
    return <WeatherCloud size="90%" />;
  }

  return <WeatherSun size="90%" />;
}
