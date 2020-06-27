import useAxios from 'axios-hooks';

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

function getEnv(property: string): string {
  const value = process.env[property];

  if (value) {
    return value;
  }

  throw new Error(`Configuration error: ${property} is not defined!`);
}
