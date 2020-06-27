import { addDays, startOfDay, isWithinInterval } from 'date-fns';

import { TForecastItemDto } from '../../../api/types';

export default function getDayForecast(
  items: TForecastItemDto[],
  date: Date
): TForecastItemDto[] {
  const isWithinSelectedDay = createOneDayPredicate(date);

  return items.filter(isWithinSelectedDay);
}

function createOneDayPredicate(date: Date) {
  const start = startOfDay(date);
  const end = addDays(start, 1);

  return (item: TForecastItemDto) =>
    isWithinInterval(new Date(item.dt * 1000), { start, end });
}
