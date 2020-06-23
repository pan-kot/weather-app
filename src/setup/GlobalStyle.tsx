import { createGlobalStyle } from 'styled-components';

import { getColor } from '../styling';

export default createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;

    overflow: hidden;

    font-family: Roboto;

    background: ${getColor('background')};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
