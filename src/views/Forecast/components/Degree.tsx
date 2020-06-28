import React, { Fragment } from 'react';

type TDegreeProps = {
  temp: number;
};

export default function Degree({ temp }: TDegreeProps) {
  return <Fragment>{temp}°</Fragment>;
}
