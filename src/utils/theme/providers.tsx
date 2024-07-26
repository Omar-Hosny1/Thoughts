'use client';

import { ChakraProvider } from '@chakra-ui/react';

import { Theme } from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={Theme}>{children}</ChakraProvider>;
}
