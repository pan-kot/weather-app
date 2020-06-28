/* eslint max-statements: off */

import { useState } from 'react';

import getForecastInfo from './transformers/getForecastInfo';
import getForecastTimescale from './transformers/getForecastTimescale';

import {
  TWeatherForecast,
  TWeatherForecastRequestLoading,
  TWeatherForecastRequestError,
  TWeatherForecastRequestLoaded,
} from '../types';

import useGetForecast from './useGetForecast';

export default function useWeatherForecast(): TWeatherForecast {
  const { loading, error, data, date, location } = useGetForecast();

  const [selectedIndex, selectIndex] = useState(0);

  const rq = { loading, error, date, location };

  if (loading) {
    const request = rq as TWeatherForecastRequestLoading;

    return { request };
  }

  if (error) {
    const request = rq as TWeatherForecastRequestError;

    return { request };
  }

  if (!data) {
    throw new Error('Invariant violation: no data');
  }

  const request = rq as TWeatherForecastRequestLoaded;

  const timescale = {
    items: getForecastTimescale(data, date),
    selectedIndex,
    selectIndex,
  };

  const info = getForecastInfo(data, date, selectedIndex);

  return { request, timescale, info };
}
