import React from 'react';
import styled from 'styled-components';

import { Flex } from '../../../atoms';
import { WeatherSun } from '../../../icons';

export default function Fallback() {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <SpinContainer>
        <WeatherSun size="100px" />
      </SpinContainer>
    </Flex>
  );
}

const SpinContainer = styled.div`
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
