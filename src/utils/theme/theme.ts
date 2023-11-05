import { extendTheme } from '@chakra-ui/react';

export const Theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#1D1D1D',
        letterSpacing: '2px',
      },
    },
  },
  colors: {
    primary: '#1D1D1D',
    secondary: '#EEE5E9',
    danger: '#FF7171',
    success: '#77E96D',
  },
  borderRadius: {
    sm: '4px',
    md: '7px',
    lg: '15px',
  },
});
