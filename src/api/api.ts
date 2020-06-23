import useAxios from 'axios-hooks';

const appid = getEnv('REACT_APP_APP_ID');
const sampleLocation = getEnv('REACT_APP_SAMPLE_LOCATION');

export function useGetSampleForecast() {
  return useAxios({
    method: 'get',
    url: '/forecast',
    params: {
      q: encodeURIComponent(sampleLocation),
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
