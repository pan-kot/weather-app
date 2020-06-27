import React from 'react';

import { WeatherSun, WeatherCloud } from '../../../icons';

import { TForecastItemDto } from '../../../api/types';

import { CLOUDS_THRESHOLD } from '../state/constants';

type TStatusIconProps = {
  cloudiness: number;
  size?: string;
};

export default function StatusIcon({ cloudiness, size }: TStatusIconProps) {
  if (cloudiness > CLOUDS_THRESHOLD) {
    return <WeatherCloud size={size} />;
  }

  return <WeatherSun size={size} />;
}
