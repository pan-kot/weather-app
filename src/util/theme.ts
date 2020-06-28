import { Theme } from 'styled-system';

type TStyledProps = {
  theme: Theme;
};

export function getColor(colorSpec?: string) {
  return (props: TStyledProps) => {
    if (colorSpec === undefined) {
      return undefined;
    }

    const color = props.theme.colors && props.theme.colors[colorSpec as any];

    return color || colorSpec;
  };
}
