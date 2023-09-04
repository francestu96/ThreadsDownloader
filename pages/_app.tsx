import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const colors = {
  main: "#DA3F5E",
  input: "#975F6A"
}

const theme = extendTheme({ colors });

const ThreadsDownloader = ({Component, pageProps}: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default ThreadsDownloader;
