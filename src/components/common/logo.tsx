import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';

interface ThoughtsLogoProps extends TextProps {}
function ThoughtsLogo(props: ThoughtsLogoProps) {
  return (
    <Text fontWeight="bold" fontSize="28px" color="secondary" {...props}>
      Thoughts.
    </Text>
  );
}

export default ThoughtsLogo;
