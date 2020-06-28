import type { TForecastItemDto } from '../../../../../api/types';

import findDailyForecast from '../findDailyForecast';

function createItem(date: Date): TForecastItemDto {
  return {
    dt: Math.floor(date.getTime() / 1000),
    main: { temp: 0 },
    weather: [{ main: '' }],
    clouds: { all: 0 },
  };
}

describe('findDailyForecast', () => {
  it('should allow empty input', () => {
    const forecast: TForecastItemDto[] = [];

    const dailyForecast = findDailyForecast(forecast, new Date());

    expect(dailyForecast).toEqual([]);
  });

  it('should return all items when dates match', () => {
    const forecast: TForecastItemDto[] = [
      createItem(new Date()),
      createItem(new Date()),
      createItem(new Date()),
    ];

    const dailyForecast = findDailyForecast(forecast, new Date());

    expect(dailyForecast).toEqual(forecast);
  });

  it('should return no items if no match', () => {
    const forecast: TForecastItemDto[] = [
      createItem(new Date(2020, 5, 29)),
      createItem(new Date(2020, 5, 31)),
    ];

    const dailyForecast = findDailyForecast(forecast, new Date(2020, 5, 30));

    expect(dailyForecast).toEqual([]);
  });

  it('should return matched day items', () => {
    const forecast: TForecastItemDto[] = [
      createItem(new Date(2020, 5, 31)),
      createItem(new Date(2020, 5, 30)),
      createItem(new Date(2020, 5, 31)),
      createItem(new Date(2020, 5, 30)),
      createItem(new Date(2020, 5, 31)),
    ];

    const dailyForecast = findDailyForecast(forecast, new Date(2020, 5, 31));

    expect(dailyForecast).toHaveLength(3)
  });
});
