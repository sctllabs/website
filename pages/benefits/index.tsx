import React from 'react';
import Marquee from 'react-fast-marquee';
import classNames from 'classnames';
import Image from 'next/image';

import MainLayout from 'components/MainLayout';
import { Typography } from 'components/UI-kit/Typography';
import {
  BENEFITS_CARDS,
  LOWER_MARQUEE_DATA,
  UPPER_MARQUEE_DATA
} from 'constants/content-benefits-page';
import CardTextMedia from 'components/CardTextMedia';

import styles from './BenefitsPage.module.scss';

const BenefitsPage = () => {
  return (
    <MainLayout title="Benefits | Societal">
      <div className={styles.mainSlide}>
        <div>
          <Typography
            variant="display1"
            className={classNames(styles.heading, styles.main)}
            data-text="Bring on the Appchain Future."
          >
            Bring on the Appchain Future.
          </Typography>
          <Typography variant="body1" className={styles.appchainDescription}>
            Application-specific blockchains open up a world of new design
            space. Societal is purpose-built to service DAO creation and
            management, securely interconnected to many other web3 networks.
          </Typography>
        </div>

        <Image
          src="/images/benefits-page-hero.png"
          width={400}
          height={400}
          objectFit="contain"
        />
      </div>
      <div className={styles.marqueeWrapper}>
        <Marquee
          className={styles.marquee}
          gradient={false}
          direction="right"
          pauseOnHover
        >
          <div className={styles.chipsWrapper}>
            {UPPER_MARQUEE_DATA.map(el => (
              <div key={el} className={styles.chip}>
                <Typography variant="title3">{el}</Typography>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee
          gradient={false}
          direction="right"
          pauseOnHover
          className={styles.marquee}
        >
          <div className={classNames(styles.chipsWrapper, styles.last)}>
            {LOWER_MARQUEE_DATA.map(el => (
              <div key={el} className={styles.chip}>
                <Typography variant="title3">{el}</Typography>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className={styles.cardsWrapper}>
        {BENEFITS_CARDS.map(card => (
          <CardTextMedia {...card} className={styles.card} key={card.title} />
        ))}
      </div>
      <div className={styles.slide}>
        <Typography
          variant="h2"
          className={classNames(styles.heading, styles.bottomTitle)}
          data-text="Societal’s cross-chain infrastructure layer and modular OS unlock better coordination outcomes, built for a new age of organization: Society3.0"
        >
          Societal’s cross-chain infrastructure layer and modular OS unlock
          better coordination outcomes, built for a new age of organization:
          Society3.0
        </Typography>
      </div>
    </MainLayout>
  );
};

export default BenefitsPage;
