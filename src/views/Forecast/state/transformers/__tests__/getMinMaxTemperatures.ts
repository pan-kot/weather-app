import { TForecastItemDto } from '../../../../../api/types';

import getMinMaxTemperatures from '../getMinMaxTemperatures';

function createItem(temp: number): TForecastItemDto {
  return {
    dt: 0,
    main: { temp },
    weather: [{ main: '' }],
    clouds: { all: 0 },
  };
}

describe('getMinMaxTemperatures', () => {
  it('should return [0, 0] for empty array', () => {
    const forecast: TForecastItemDto[] = [];

    const temperatures = getMinMaxTemperatures(forecast);

    expect(temperatures).toEqual([0, 0]);
  });

  it('should return min and max for array with one item', () => {
    const forecast: TForecastItemDto[] = [createItem(273.15)];

    const temperatures = getMinMaxTemperatures(forecast);

    expect(temperatures).toEqual([273.15, 273.15]);
  });

  it('should return proper min and max values', () => {
    const forecast: TForecastItemDto[] = [
      createItem(5),
      createItem(4),
      createItem(2),
      createItem(7),
      createItem(3),
      createItem(6),
    ];

    const temperatures = getMinMaxTemperatures(forecast);

    expect(temperatures).toEqual([2, 7]);
  });
});
