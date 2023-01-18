import React from 'react';
import '../styles/index.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        options={{
          easing: 'ease-out',
          speed: 300,
          trickleSpeed: 500,
          showSpinner: false
        }}
        color="#af98fae5"
        height={4}
        showOnShallow
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
