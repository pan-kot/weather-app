import React from 'react';

import { Flex, Box } from '../../../../atoms';

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
    <Flex flexDirection="column">
      <Flex height={40} justifyContent="space-between">
        <Box marginRight={3}>{headingLeft}</Box>

        {headingRight ? <Box>{headingRight}</Box> : null}
      </Flex>

      <Box>{children}</Box>
    </Flex>
  );
}
