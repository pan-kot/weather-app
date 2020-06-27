import getColor from './getColor';

import { TTheme } from '../types';

export type TTypographyStyle = {
  theme: TTheme;
  color?: string;
  size?: string;
  bold?: boolean;
};

type TCssStyle = {
  color?: string;
  fontSize?: string;
  fontWeight?: 'bold';
};

export default function typographyStyle(props: TTypographyStyle): TCssStyle {
  return {
    color: getColor(props.color)(props),

    fontSize: props.size,

    fontWeight: props.bold ? 'bold' : undefined,
  } as TCssStyle;
}
