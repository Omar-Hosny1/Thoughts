import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import React from 'react';

import type { RoundedFlatFrom } from '@/utils/types/RoundedFlatFrom';

interface Props extends BoxProps {
  roundedFlatFrom: RoundedFlatFrom;
}

function Paper({ roundedFlatFrom, ...props }: Props) {
  return (
    <Box
      borderTopRightRadius={
        roundedFlatFrom === 'right' ? 0 : props.borderRadius
      }
      borderTopLeftRadius={roundedFlatFrom === 'left' ? 0 : props.borderRadius}
      {...props}
    />
  );
}

export default Paper;
