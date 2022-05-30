import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Lottie from 'react-lottie';

import logoAnimationData from 'animation/logo.json';
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
          <div className={styles.logo}>
            <Lottie
              options={{
                autoplay: false,
                loop: true,
                animationData: logoAnimationData
              }}
            />
          </div>
          <p className={styles.description}>
            The future of society is under construction. Please stand by...
          </p>
        </div>
      </main>
    </>
  );
};

export default Splash;
