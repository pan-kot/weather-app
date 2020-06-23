import styled from 'styled-components';

import {
  dimensionsStyle,
  flexStyle,
  spacingStyle,
  TDimensionsStyle,
  TSpacingStyle,
  TFlexStyle,
} from '../styling';

type TBoxProps = TDimensionsStyle & TSpacingStyle;

export const Box = styled.div<TBoxProps>`
  ${dimensionsStyle};
  ${spacingStyle};
`;

type TFlexProps = TBoxProps & TFlexStyle;

export const Flex = styled(Box)<TFlexProps>`
  ${flexStyle};
`;
