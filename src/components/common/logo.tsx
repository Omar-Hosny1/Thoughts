import type { TextProps } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';

import { useThemeColor } from '@/utils/theme/theme-colors-provider';

interface ThoughtsLogoProps extends TextProps {}
function ThoughtsLogo(props: ThoughtsLogoProps) {
  const { secondaryColor } = useThemeColor();
  return (
    <Text fontWeight="bold" fontSize="28px" color={secondaryColor} {...props}>
      Thoughts.
    </Text>
  );
}

export default ThoughtsLogo;
