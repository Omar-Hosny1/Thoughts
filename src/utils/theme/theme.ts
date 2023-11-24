import { extendTheme } from '@chakra-ui/react';

export const Theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#1D1D1D',
        paddingX: { base: '15px', md: '30px' },
        paddingY: { base: '10px', md: '20px' },
        transition: '0.3s',
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
    Text: {
      letterSpacing: '10px',
    },
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
