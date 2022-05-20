import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './Splash.module.scss';

const Splash: NextPage = () => {
  return (
    <>
      <Head>
        <title>Societal</title>
      </Head>

      <main className={styles.root}>
        <div className={styles.content}>
          <h4 className={styles.title}>BUIDLING</h4>
          <video
            className={styles.logo}
            src="/videos/logo.webm"
            muted
            autoPlay
          />
          <p className={styles.description}>
            The future of society is under construction. Please stand by...
          </p>
        </div>
      </main>
    </>
  );
};

export default Splash;
