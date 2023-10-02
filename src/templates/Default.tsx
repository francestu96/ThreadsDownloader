import { FC, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import Header from 'elements/Header';
import Footer from 'elements/Footer';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico"></link>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7675163173558825" crossOrigin="anonymous"></script>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Default;
