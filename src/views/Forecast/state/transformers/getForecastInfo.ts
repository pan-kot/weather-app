import { kelvinToCelcius } from '../../../../util';
import { TForecastResponse } from '../../../../api/types';
import { TWeatherForecastInfo } from '../../types';

import findDailyForecast from './findDailyForecast';
import getMinMaxTemperatures from './getMinMaxTemperatures';

export default function getForecastInfo(
  data: TForecastResponse,
  selectedDay: Date,
  selectedIndex: number
): TWeatherForecastInfo {
  const date = selectedDay;

  const city = data.city.name;

  const dailyForecast = findDailyForecast(data.list, selectedDay);

  const [minTempKelvin, maxTempKelvin] = getMinMaxTemperatures(dailyForecast);

  const item = dailyForecast[selectedIndex];

  const status = item.weather[0].main;

  const cloudiness = item.clouds.all;

  const temperature = {
    celcius: {
      selected: kelvinToCelcius(item.main.temp),
      min: kelvinToCelcius(minTempKelvin),
      max: kelvinToCelcius(maxTempKelvin),
    },
  };

  return { date, city, status, cloudiness, temperature };
}
