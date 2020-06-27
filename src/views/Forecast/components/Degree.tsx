import React, { Fragment } from 'react';

import kelvinToCelcius from '../state/kelvinToCelcius';

type TDegreeProps = {
  temp: number;
};

export default function Degree({ temp }: TDegreeProps) {
  return <Fragment>{kelvinToCelcius(temp)}°</Fragment>;
}
