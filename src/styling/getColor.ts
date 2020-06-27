import { get } from 'lodash';
import { TTheme } from '../types';

type TStyledProps = {
  theme: TTheme;
};

export default function getColor(colorSpec?: string) {
  return (props: TStyledProps) => {
    if (colorSpec === undefined) {
      return undefined;
    }

    const color = get(props.theme.color, colorSpec);

    return color || colorSpec;
  };
}
