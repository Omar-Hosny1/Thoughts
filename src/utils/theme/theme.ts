import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

export const Theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  } satisfies ThemeConfig,
  colors: {
    primary: {
      light: 'white',
      dark: '#1D1D1D',
    },
    secondary: {
      light: '#4b657d',
      dark: '#EEE5E9',
    },
    danger: '#FF7171',
    success: '#77E96D',
  },
  styles: {
    global: (props: any) => {
      return {
        body: {
          bg:
            props.colorMode === 'dark'
              ? props.theme.colors.primary.dark
              : props.theme.colors.primary.light,
          paddingX: { base: '15px !important', md: '30px !important' },
          paddingY: { base: '10px !important', md: '20px !important' },
          transition: '0.3s',
        },
      };
    },
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
