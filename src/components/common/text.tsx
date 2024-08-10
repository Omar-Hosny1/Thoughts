import type { TextProps } from '@chakra-ui/react';
import { Text as ChakraText, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export interface GLobalTextProps extends TextProps {
  themeColor?: 'primary' | 'secondary';
}

function Text({ themeColor = 'secondary', ...props }: GLobalTextProps) {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');

  const selectedColor =
    themeColor === 'primary' ? primaryColor : secondaryColor;
  return <ChakraText color={selectedColor} fontWeight="light" {...props} />;
}

export default Text;
