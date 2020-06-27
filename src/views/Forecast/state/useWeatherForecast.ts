import { AxiosError } from 'axios';
import { useState, useMemo, useEffect } from 'react';
import { getHours } from 'date-fns';

import { useGetSampleForecast } from '../../../api/api';
import { TForecastItemDto } from '../../../api/types';

import getDayForecast from './getDayForecast';
import { DEFAULT_LOCATION, FAKE_TODAY_DT } from './constants';

export type TForecastSummary = {
  minTemp: number;
  maxTemp: number;
};

export type TWeatherForecast = {
  loading: boolean;
  error?: AxiosError<any>;
  location: string;
  date: Date;
  selectedIndex: number;
  selectIndex(index: number): void;
  dayForecast: TForecastItemDto[];
  selectedForecast?: TForecastItemDto;
  summary?: TForecastSummary;
};

export default function useWeatherForecast(): TWeatherForecast {
  const [location] = useState(DEFAULT_LOCATION);
  const [date] = useState(getFakeToday());
  const [selectedIndex, selectIndex] = useState(0);

  const [{ loading, error, data }] = useGetSampleForecast(location);
  const items = data?.list || [];

  const dayForecast = useMemo(() => getDayForecast(items, date), [items, date]);

  useEffect(() => {
    if (dayForecast) {
      selectIndex(getCurrentTimeIndex(dayForecast));
    }
  }, [dayForecast]);

  const selectedForecast = dayForecast[selectedIndex];

  if (loading || error || !selectedForecast) {
    return {
      loading: loading || !selectedForecast,
      error,
      location,
      date,
      selectedIndex,
      selectIndex,
      dayForecast,
    };
  }

  const summary = getForecastSummary(dayForecast);

  return {
    loading,
    error,
    location,
    date,
    selectedIndex,
    selectIndex,
    dayForecast,
    selectedForecast,
    summary,
  };
}

function getForecastSummary(forecast: TForecastItemDto[]) {
  const templeratures = getTemperatures(forecast);

  return {
    minTemp: templeratures.reduce((min, temp) => Math.min(min, temp)),
    maxTemp: templeratures.reduce((max, temp) => Math.max(max, temp)),
  };
}

function getTemperatures(forecast: TForecastItemDto[]) {
  return forecast.map((it) => it.main.temp);
}

function getCurrentTimeIndex(forecast: TForecastItemDto[]) {
  const currentHour = getHours(getToday());

  const index = forecast.findIndex(
    (item) => getHours(item.dt * 1000) - currentHour > 0
  );

  return index !== -1 ? index : forecast.length - 1;
}

function getToday() {
  return new Date();
}

function getFakeToday() {
  return new Date(FAKE_TODAY_DT * 1000);
}
