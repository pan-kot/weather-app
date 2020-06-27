import { get } from 'lodash';
import { Theme } from 'styled-system';

type TStyledProps = {
  theme: Theme;
};

export default function getColor(colorSpec?: string) {
  return (props: TStyledProps) => {
    if (colorSpec === undefined) {
      return undefined;
    }

    const color = get(props.theme.colors, colorSpec);

    return color || colorSpec;
  };
}
