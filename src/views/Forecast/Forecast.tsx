import styled from 'styled-components';
import React, { Fragment } from 'react';

import useWeatherForecast from './state/useWeatherForecast';

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
    <ForecastContainer>
      <HeaderContainer>
        <StatusContainer>
          <StatusIcon />
          <SelectedTimeStatus />
        </StatusContainer>

        <InfoContainer>
          <LocationAndDate />
        </InfoContainer>
      </HeaderContainer>

      <TimeScaleContainer>
        <TimeScale />
      </TimeScaleContainer>
    </ForecastContainer>
  );
}

const ForecastContainer = styled.div`
  min-width: 200px;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const HeaderContainer = styled.div`
  display: flex;

  padding: 1rem;
`;

const StatusContainer = styled.div`
  display: flex;
`;

const InfoContainer = styled.div``;

const TimeScaleContainer = styled.div`
  padding: 1rem;
`;
