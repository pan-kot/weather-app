import { addDays, isWithinInterval } from 'date-fns';

import { TForecastResponse, TForecastItemDto } from '../../../api/types';

export default function getTodayForecast(
  forecast: TForecastResponse
): TForecastResponse {
  const isTodaysItem = createTodayPredicate();
  const list = forecast.list.filter(isTodaysItem);

  return { ...forecast, list };
}

/*
 * The sample forecast ednpoint does not really provide the actual data.
 *
 * Also, it does not provide the timezone although the documentation says it should.
 *
 * Therefore the FAKE_TODAY is set to 2017-02-20 00:00:00 which is the only
 * day of the samle forecast that has some cloudy weather conditions.
 */
const FAKE_TODAY = 1487548800000;

function createTodayPredicate() {
  const today = new Date(FAKE_TODAY);
  const tomorrow = addDays(today, 1);
  const interval = { start: today, end: tomorrow };

  return (item: TForecastItemDto) => isWithinInterval(item.dt, interval);
}
