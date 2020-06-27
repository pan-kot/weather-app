import { css } from 'styled-components';

export type TFlexStyle = {
  column?: boolean;
  nowrap?: boolean;
  alignItems?: string;
  justifyContent?: string;
};

type TCssStyle = {
  display: 'flex';
  flexDirection: 'column' | 'row';
  flexWrap?: 'wrap' | 'nowrap';
  alignItems?: string;
  justifyContent?: string;
};

export default function flexStyle(props: TFlexStyle): TCssStyle {
  return {
    display: 'flex',

    flexDirection: props.column ? 'column' : 'row',

    flexWrap: props.nowrap ? 'nowrap' : 'wrap',

    alignItems: props.alignItems,

    justifyContent: props.justifyContent,
  } as TCssStyle;
}
