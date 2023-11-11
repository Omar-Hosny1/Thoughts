import { extendTheme } from '@chakra-ui/react';

export const Theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#1D1D1D',
        letterSpacing: '2px',
        paddingX: '30px',
        paddingY: '10px',
      },
    },
  },
  colors: {
    primary: '#1D1D1D',
    secondary: '#EEE5E9',
    danger: '#FF7171',
    success: '#77E96D',
  },
  components: {
    Button: {
      baseStyle: {
        rounded: {
          sms: '4px',
          mds: '7px',
          lgs: '15px',
        },
      },
    },
  },
});
