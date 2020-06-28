import { kelvinToCelcius, dtToDate } from '../../../../util';
import { TForecastResponse, TForecastItemDto } from '../../../../api/types';
import { TWeatherForecastTimescaleItem } from '../../types';

import findDailyForecast from './findDailyForecast';

export default function getForecastTimescale(
  data: TForecastResponse,
  selectedDay: Date
): TWeatherForecastTimescaleItem[] {
  const dailyForecast = findDailyForecast(data.list, selectedDay);

  return dailyForecast.map(getTimescaleItem);
}

function getTimescaleItem(
  dataItem: TForecastItemDto
): TWeatherForecastTimescaleItem {
  return {
    date: dtToDate(dataItem.dt),
    cloudiness: dataItem.clouds.all,
    temperature: {
      celcius: kelvinToCelcius(dataItem.main.temp),
    },
  };
}
