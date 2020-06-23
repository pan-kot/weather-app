// See https://openweathermap.org/forecast5

export type TForecastResponse = {
  city: TForecastCityDto;
  list: TForecastItemDto[];
};

export type TForecastCityDto = {
  name: string;
};

export type TForecastItemDto = {
  // Time of data forecasted, unix, UTC
  dt: number;
  weather: TForecastItemWeatherItemDto[];
  clouds: {
    // Cloudiness, %
    all: number;
  };
};

export type TForecastItemWeatherItemDto = {
  // Group of weather parameters (Rain, Snow, Extreme etc.)
  main: string;
};
