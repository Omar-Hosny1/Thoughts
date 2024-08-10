'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { Theme } from './theme';
import ThemeColorsProvider from './theme-colors-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <ChakraProvider theme={Theme}>
        <ThemeColorsProvider>{children}</ThemeColorsProvider>
      </ChakraProvider>
    </>
  );
}
