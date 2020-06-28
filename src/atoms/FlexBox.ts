import styled from 'styled-components';

import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
} from 'styled-system';

type TBoxProps = ColorProps & SpaceProps & LayoutProps;

export const Box = styled.div<TBoxProps>`
  ${color};
  ${space};
  ${layout};
`;

export const Flex = styled(Box)<any>`
  display: flex;

  ${flexbox};
`;
