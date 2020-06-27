import React from 'react';
import { ThemeProvider } from 'styled-components';

import { TTheme } from '../types';

type TThemeProps = {
  children: React.ReactElement;
};

export default function Theme({ children }: TThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const theme: TTheme = {
  color: {
    background: '#262A59',
    'fg-primary': '#FFFFFF',
    'fg-secondary': '#A8AABD',
  },
  breakpoints: {
    sm: '40em',
    md: '52em',
    lg: '64em',
  },
};
