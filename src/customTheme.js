import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: {
        body: {
          bg: 'gray.800',
          color: 'white',
        },
      },
      NavBar: {
        container: {
          bg: 'gray.700',
        },
      },
    },
  });

  export default customTheme;
