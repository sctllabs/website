import React from 'react';
import Image from 'next/image';

import MainLayout from 'components/MainLayout';
import BannerTitle from 'components/BannerTitle';

import { Typography } from 'components/UI-kit/Typography';
import { BANNER_TITLES, CARDS_HOME_PAGE } from 'constants/content-home-page';
import CardHomePage from 'components/CardHomePage';
import { SubscribeSection } from 'components/SubscribeSection';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <MainLayout className={styles.layout} title="Societal">
      <BannerTitle titles={BANNER_TITLES} className={styles.bannerTitle} />
      <div className={styles.heroImage}>
        <Image
          src="/images/home-page-illustration.png"
          layout="responsive"
          width={1440}
          height={1143}
          quality={100}
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles.contentContainer}>
        <Typography variant="h2" className={styles.title}>
          Societal is an application-specific blockchain, designed for the
          creation and management of DAOs
        </Typography>
        <div className={styles.cardsContainer}>
          {CARDS_HOME_PAGE.map(card => (
            <CardHomePage {...card} key={card.href} />
          ))}
        </div>
      </div>
      <SubscribeSection />
    </MainLayout>
  );
};

export default Home;
