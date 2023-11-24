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
      rounded="lg"
      borderTopRightRadius={
        roundedFlatFrom === 'right' ? 0 : props.borderRadius || props.rounded
      }
      borderTopLeftRadius={
        roundedFlatFrom === 'left' ? 0 : props.borderRadius || props.rounded
      }
      {...props}
    />
  );
}

export default Paper;
