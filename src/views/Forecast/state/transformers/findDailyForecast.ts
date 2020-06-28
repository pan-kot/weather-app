import { startOfDay, isWithinInterval, endOfDay } from 'date-fns';

import { dtToDate } from '../../../../util';
import { TForecastItemDto } from '../../../../api/types';

export default function findDailyForecast(
  items: TForecastItemDto[],
  day: Date
) {
  const start = startOfDay(day);
  const end = endOfDay(day);

  const matcher = (item: TForecastItemDto) =>
    isWithinInterval(dtToDate(item.dt), { start, end });

  return items.filter(matcher);
}
