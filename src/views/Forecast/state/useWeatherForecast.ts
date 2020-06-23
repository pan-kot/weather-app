import { useState } from 'react';

import { useGetSampleForecast } from '../../../api/api';
import { TForecastResponse } from '../../../api/types';
import getTodayForecast from './getTodayForecast';

export type TWeatherForecast = {
    loading: boolean;
    error: Error | void;
    forecast: TForecastResponse | null;
    selectedHour: number;
    selectHour(hour: number): void;
}

export default function useWeatherForecast(): TWeatherForecast {
  const [selectedHour, selectHour] = useState(0);

  const [{ loading, error, data }] = useGetSampleForecast();

  const forecast = transformData(data);

  return { loading, error, forecast, selectedHour, selectHour };
}

function transformData(data: TForecastResponse | null) {
  if (!data) {
    return null;
  }

  return getTodayForecast(data);
}
