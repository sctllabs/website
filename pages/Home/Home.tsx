import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import MainLayout from 'components/MainLayout';
import BannerTitle from 'components/BannerTitle';

import { Icon } from 'components/UI-kit/Icon';
import { Typography } from 'components/UI-kit/Typography';
import { BANNER_TITLES, CARDS_HOME_PAGE } from 'constants/content-home-page';

import CardHomePage from 'components/CardHomePage';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <MainLayout className={styles.layout} title="Societal">
      <div className={styles.fixedWrapper}>
        <BannerTitle titles={BANNER_TITLES} className={styles.bannerTitle} />
        <Image
          src="/images/home-page-hero-image.png"
          width={1440}
          height={400}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className={styles.mainWrapper}>
        <div className={styles.scrollBlock}>
          <Icon
            name="chevron-down"
            className={classNames(styles.scrollIcon, styles.upper)}
          />
          <Icon
            name="chevron-down"
            className={classNames(styles.scrollIcon, styles.lower)}
          />
        </div>
        <Image
          src="/images/home-page-illustration.png"
          layout="responsive"
          width={2160}
          height={1536}
          quality={100}
          objectFit="contain"
        />
        <div className={styles.contentContainer}>
          <Typography variant="title1" className={styles.title}>
            Societal is an application-specific blockchain, designed for the
            creation and management of DAOs
          </Typography>
          <div className={styles.cardsContainer}>
            {CARDS_HOME_PAGE.map(card => (
              <CardHomePage {...card} key={card.href} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
