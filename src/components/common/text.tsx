import type { TextProps } from '@chakra-ui/react';
import { Text as ChakraText } from '@chakra-ui/react';
import React from 'react';

export interface GLobalTextProps extends TextProps {
  themeColor?: 'primary' | 'secondary';
}

function Text({ themeColor = 'secondary', ...props }: GLobalTextProps) {
  return <ChakraText color={themeColor} fontWeight="light" {...props} />;
}

export default Text;
