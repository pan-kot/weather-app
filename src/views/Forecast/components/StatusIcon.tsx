import React from 'react';

import { WeatherSun, WeatherCloud } from '../../../icons';

import { CLOUDS_THRESHOLD } from '../constants';

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
