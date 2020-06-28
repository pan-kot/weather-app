import { AxiosError } from 'axios';

export type TWeatherForecast =
  | TWeatherForecastLoading
  | TWeatherForecastError
  | TWeatherForecastLoaded;

export type TWeatherForecastLoading = {
  request: TWeatherForecastRequestLoading;
};

export type TWeatherForecastError = {
  request: TWeatherForecastRequestError;
};

export type TWeatherForecastLoaded = {
  request: TWeatherForecastRequestLoaded;
  info: TWeatherForecastInfo;
  timescale: TWeatherForecastTimescale;
};

export type TWeatherForecastInfo = {
  date: Date;
  city: string;
  status: string;
  cloudiness: number;
  temperature: {
    celcius: {
      selected: number;
      min: number;
      max: number;
    };
  };
};

export type TWeatherForecastTimescale = {
  selectedIndex: number;
  selectIndex(index: number): void;
  items: TWeatherForecastTimescaleItem[];
};

export type TWeatherForecastTimescaleItem = {
  date: Date;
  cloudiness: number;
  temperature: {
    celcius: number;
  };
};

export type TWeatherForecastRequest =
  | TWeatherForecastRequestLoading
  | TWeatherForecastRequestError
  | TWeatherForecastRequestLoaded;

export type TWeatherForecastRequestLoading = {
  loading: true;
  error: void;
  location: string;
  date: Date;
};

export type TWeatherForecastRequestError = {
  loading: false;
  error: AxiosError<any>;
  location: string;
  date: Date;
};

export type TWeatherForecastRequestLoaded = {
  loading: false;
  error: void;
  location: string;
  date: Date;
};
