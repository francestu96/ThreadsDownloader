import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from 'elements/Header';
import Footer from 'elements/Footer';
import Script from 'next/script';
import { useTranslation } from 'next-i18next';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => {
  const { t } = useTranslation();
  
  return (
    <>
      <Head>
        <title>{`${pageName}`}</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta charSet="utf-8"/>
        <meta name="description" content={t("META.DESCRIPTION")}/>
        <meta name="keywords" content={t("META.DESCRIPTION")}/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7675163173558825" crossOrigin="anonymous"></Script>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default Default;
