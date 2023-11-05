import '@/styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Jua } from 'next/font/google';

import { Theme } from '@/utils/theme/theme';

const jua = Jua({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={jua.className}>
      <ChakraProvider theme={Theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
};

export default MyApp;
