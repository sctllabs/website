import classNames from 'classnames';
import React from 'react';
import Image from 'next/image';

import MainLayout from 'components/MainLayout';
import { Typography } from 'components/UI-kit/Typography';
import CardTextMedia from 'components/CardTextMedia';
import {
  ABOUT_CARDS,
  ADVISORS,
  CARTOGRAPHY,
  TEAM
} from 'constants/content-about-page';
import CartographyCell from 'components/CartographyCell';
import CardTeam from 'components/CardTeam';
import CardAdvisor from 'components/CardAdvisor';

import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <MainLayout className={styles.layout} title="About | Societal">
      <div className={styles.mainSlide}>
        <Typography
          variant="display1"
          className={classNames(styles.heading, styles.main)}
          data-text="SOCIETAL IS A MISSION TO HARNESS THE POWER OF BLOCKCHAINS TO IMPROVE HUMAN COORDINATION SYSTEMS"
        >
          SOCIETAL IS A MISSION TO HARNESS THE POWER OF BLOCKCHAINS TO IMPROVE
          HUMAN COORDINATION SYSTEMS
        </Typography>
      </div>
      <div className={styles.cardsWrapper}>
        {ABOUT_CARDS.map(card => (
          <CardTextMedia {...card} className={styles.card} key={card.title} />
        ))}
      </div>
      <div className={styles.slide}>
        <Typography
          variant="h2"
          data-text="We Don’t Need Roads"
          className={classNames(styles.heading, styles.sub)}
        >
          We Don’t Need Roads
        </Typography>
        <div className={styles.cartographyBlock}>
          {CARTOGRAPHY.map(el => (
            <CartographyCell {...el} key={el.head} />
          ))}
        </div>
      </div>
      <div className={styles.slide}>
        <Typography
          variant="h2"
          data-text="Team"
          className={classNames(styles.heading, styles.sub)}
        >
          Team
        </Typography>
        <div className={styles.teamBlock}>
          {TEAM.map(member => (
            <CardTeam {...member} key={member.name + member.position} />
          ))}
        </div>
      </div>
      <div className={styles.slide}>
        <Typography
          variant="h2"
          data-text="Advisors"
          className={classNames(styles.heading, styles.sub)}
        >
          Advisors
        </Typography>
        <div className={styles.advisorsBlock}>
          {ADVISORS.map(advisor => (
            <CardAdvisor {...advisor} key={advisor.name + advisor.position} />
          ))}
        </div>
      </div>
      <div className={styles.slide}>
        <Typography
          variant="h2"
          data-text="Partners"
          className={classNames(styles.heading, styles.sub)}
        >
          Partners
        </Typography>
        <div className={styles.partnersBlock}>
          <Image
            src="/images/logos/ventures-polka.svg"
            height={94}
            width={272}
            objectFit="contain"
          />
          <Image
            src="/images/logos/kusama-kingdom.png"
            height={94}
            width={109}
            objectFit="contain"
          />
          <Image
            src="/images/logos/dia.png"
            height={94}
            width={152}
            objectFit="contain"
          />
          <Image
            src="/images/logos/web-3-foundation.png"
            height={94}
            width={212}
            objectFit="contain"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
