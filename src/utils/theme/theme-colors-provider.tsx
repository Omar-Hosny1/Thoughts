import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

const ThemeColorsContext = createContext({
  primaryColor: '',
  secondaryColor: '',
  colorMode: '',
  toggleColorMode: () => {},
});

export const useThemeColor = () => useContext(ThemeColorsContext);

function ThemeColorsProvider({ children }: { children: ReactNode }) {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const { colorMode, toggleColorMode } = useColorMode();

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    primaryColor,
    secondaryColor,
    colorMode,
    toggleColorMode,
  };

  return (
    <ThemeColorsContext.Provider value={value}>
      {children}
    </ThemeColorsContext.Provider>
  );
}

export default ThemeColorsProvider;
