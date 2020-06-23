import styled from 'styled-components';
import React, { Fragment } from 'react';

import useWeatherForecast from './state/useWeatherForecast';

import { Flex, Box } from '../../atoms';

import LocationAndDate from './components/LocationAndDate';
import SelectedTimeStatus from './components/SelectedTimeStatus';
import StatusIcon from './components/StatusIcon';
import TimeScale from './components/TimeScale';

export default function Forecast() {
  const forecast = useWeatherForecast();

  if (forecast.loading || forecast.error) {
    // TODO: provide a proper handling
    return <Fragment />;
  }

  return (
    <Flex column minWidth="200px" maxWidth="800px">
      <Flex padding="1rem">
        <StatusContainer>
          <StatusIcon />
          <SelectedTimeStatus />
        </StatusContainer>

        <InfoContainer>
          <LocationAndDate />
        </InfoContainer>
      </Flex>

      <TimeScaleContainer>
        <TimeScale />
      </TimeScaleContainer>
    </Flex>
  );
}

const StatusContainer = styled.div`
  display: flex;
`;

const InfoContainer = styled.div``;

const TimeScaleContainer = styled.div`
  padding: 1rem;
`;
