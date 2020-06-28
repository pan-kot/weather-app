import { TForecastItemDto } from '../../../../api/types';

type TTemperature = number;

export default function getMinMaxTemperatures(
  items: TForecastItemDto[]
): [TTemperature, TTemperature] {
  if (items.length === 0) {
    return [0, 0];
  }

  const temperatures = items.map(getTemperature);

  return [
    temperatures.reduce((min, temp) => Math.min(min, temp)),
    temperatures.reduce((max, temp) => Math.max(max, temp)),
  ];
}

function getTemperature(item: TForecastItemDto) {
  return item.main.temp;
}
