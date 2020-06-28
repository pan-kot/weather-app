import { getEnv } from '../../util';

export const DEFAULT_LOCATION = getEnv('REACT_APP_DEFAULT_LOCATION', '');

/*
 * The sample forecast ednpoint does not really provide the actual data.
 *
 * Also, it does not provide the timezone although the documentation says it should.
 *
 * Therefore the FAKE_TODAY_DT is set to 2017-02-18 00:00:00 represention one day
 * from the sample forecast data having different weather conditions.
 */
export const FAKE_TODAY_DT = 1487376000;

// See https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
export const CLOUDS_THRESHOLD = 10;
