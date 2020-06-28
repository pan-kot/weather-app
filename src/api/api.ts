import useAxios from 'axios-hooks';

import { getEnv } from '../util';

const appid = getEnv('REACT_APP_APP_ID');

export function useGetSampleForecast(location: string) {
  return useAxios({
    method: 'get',
    url: '/forecast',
    params: {
      q: encodeURIComponent(location),
      appid,
    },
  });
}
