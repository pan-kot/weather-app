import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme } from 'styled-system';

type TThemeProps = {
  children: React.ReactElement;
};

export default function Provider({ children }: TThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const theme: Theme = {
  colors: {
    background: '#262A59',
    'fg-primary': '#FFFFFF',
    'fg-secondary': '#A8AABD',
  },
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};
