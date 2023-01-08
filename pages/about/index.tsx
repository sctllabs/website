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
      <div className={styles.slide}>
        <Typography
          variant="display1"
          className={classNames(styles.heading, styles.main)}
          data-text="Societal is a mission to harness the power of blockchain to improve human coordination systems"
        >
          Societal is a mission to harness the power of blockchain to improve
          human coordination systems
        </Typography>
      </div>
      <div className={styles.cardsWrapper}>
        {ABOUT_CARDS.map(card => (
          <CardTextMedia {...card} className={styles.card} key={card.title} />
        ))}
      </div>
      <div className={styles.slide}>
        <Typography
          variant="h1"
          data-text="Cartography"
          className={classNames(styles.heading, styles.sub)}
        >
          Cartography
        </Typography>
        <div className={styles.cartographyBlock}>
          {CARTOGRAPHY.map(el => (
            <CartographyCell {...el} key={el.head} />
          ))}
        </div>
      </div>
      <div className={styles.slide}>
        <Typography
          variant="h1"
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
          variant="h1"
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
          variant="h1"
          data-text="Partners"
          className={classNames(styles.heading, styles.sub)}
        >
          Partners
        </Typography>
        <div className={styles.partnersBlock}>
          <Image
            src="/images/logos/ventures-polka.svg"
            height={90}
            width={272}
          />
          <Image src="/images/logos/substrate.svg" height={90} width={170} />
          <Image
            src="/images/logos/web3-foundation.svg"
            height={90}
            width={122}
          />
          <Image src="/images/logos/onfinality.svg" height={90} width={176} />
          <Image src="/images/logos/subquery.svg" height={90} width={149} />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
