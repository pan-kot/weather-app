import React from 'react';

import { Flex, Box } from '../../../atoms';

type TInfoSectionProps = {
  headingLeft: React.ReactNode;
  headingRight?: React.ReactNode;
  children: React.ReactNode;
};

export default function InfoSection({
  headingLeft,
  headingRight,
  children,
}: TInfoSectionProps) {
  return (
    <Flex column>
      <Flex height="40px" justifyContent="space-between">
        <Box margin="0 20px 0 0">{headingLeft}</Box>

        {headingRight ? <Box>{headingRight}</Box> : null}
      </Flex>

      <Box>{children}</Box>
    </Flex>
  );
}
