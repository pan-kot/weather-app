import { AxiosError } from 'axios';
import { useState } from 'react';

import { dtToDate } from '../../../util';
import { useGetSampleForecast } from '../../../api/api';
import { TForecastResponse } from '../../../api/types';

import { DEFAULT_LOCATION, FAKE_TODAY_DT } from '../constants';

export type TWeatherForecastGet =
  | TWeatherForecastGetLoading
  | TWeatherForecastGetError
  | TWeatherForecastGetLoaded;

type TWeatherForecastGetLoading = {
  loading: true;
  error: void;
  data: null;
} & TWeatherForecastGetParams;

type TWeatherForecastGetError = {
  loading: false;
  error: AxiosError<any>;
  data: null;
} & TWeatherForecastGetParams;

type TWeatherForecastGetLoaded = {
  loading: false;
  error: void;
  data: TForecastResponse;
} & TWeatherForecastGetParams;

type TWeatherForecastGetParams = {
  location: string;
  setLocation(location: string): void;
  date: Date;
  setDate(date: Date): void;
};

export default function useGetForecast(): TWeatherForecastGet {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [date, setDate] = useState(getFakeToday());

  const [{ loading, error, data }] = useGetSampleForecast(location);

  const res = {
    loading,
    error,
    data,
    location,
    setLocation,
    date,
    setDate,
  };

  if (loading) {
    return res as TWeatherForecastGetLoading;
  }

  if (error) {
    return res as TWeatherForecastGetError;
  }

  return res as TWeatherForecastGetLoaded;
}

function getFakeToday() {
  return dtToDate(FAKE_TODAY_DT);
}
