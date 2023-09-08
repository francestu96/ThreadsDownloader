import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  main: "#e95a34",
  input: "#975F6A"
}

const theme = extendTheme({ config, colors });

const ThreadsDownloader = ({Component, pageProps}: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default appWithTranslation(ThreadsDownloader);
