import type { ButtonProps } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useThemeColor } from '@/utils/theme/theme-colors-provider';

import Button from '../base/button';

interface ThemeToggleButtonProps extends ButtonProps {}

function ThemeToggleButton(props: ThemeToggleButtonProps) {
  const { colorMode, toggleColorMode } = useThemeColor();

  return (
    <Button
      onClick={toggleColorMode}
      p={4}
      borderRadius="full"
      transition="0.3s ease"
      bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
      _hover={{
        bg: colorMode === 'light' ? 'gray.300' : 'gray.600',
      }}
      _active={{
        transform: 'scale(0.95)',
      }}
      {...props}
    >
      {colorMode === 'light' ? <FaMoon /> : <FaSun />}
    </Button>
  );
}

export default ThemeToggleButton;
