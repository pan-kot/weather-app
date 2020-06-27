import React, { Fragment } from 'react';

import kalvinToCelcius from '../state/kalvinToCelcius';

type TDegreeProps = {
  temp: number;
};

export default function Degree({ temp }: TDegreeProps) {
  return <Fragment>{kalvinToCelcius(temp)}°</Fragment>;
}
