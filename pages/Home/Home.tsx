import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Typography } from 'components/UI-kit/Typography';
import { Icon } from 'components/UI-kit/Icon';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Infographic } from 'components/Infographic';
import {
  about,
  banner,
  features,
  governance,
  polkadot,
  team
} from 'constants/landing-page';
import { ReactComponent as BannerBg } from 'public/images/banner-bg.svg';
import { ReactComponent as ShapeBgSvg } from 'public/images/shape-bg.svg';
import { SubsctibeSection } from 'components/SubsctibeSection';
import styles from './Home.module.scss';
import Slider from '../../components/Slider';
import BannerTitle from '../../components/BannerTitle';

const Home = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.content}>
        <section className={styles.banner}>
          <BannerBg className={styles.bannerBg} />
          <div className={styles.bannerText}>
            <BannerTitle
              titles={banner.titles}
              className={styles.bannerTitle}
            />
            <Typography
              variant="paragraph1"
              className={styles.bannerDescription}
            >
              Societal is a catalyst for a self-governed society building an
              ecosystem of DAOs.
            </Typography>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <Typography variant="h2" className={styles.sectionTitle} glitch>
            {about.title}
          </Typography>
          <Typography
            variant="body1"
            className={classNames(styles.aboutText, styles.sectionDescription)}
          >
            {about.description1}
          </Typography>
          <Typography
            variant="body1"
            className={classNames(styles.aboutText, styles.sectionDescription)}
          >
            {about.description2}
          </Typography>
          <ul className={styles.aboutCardList}>
            {about.items.map(({ icon: AboutIcon, title }) => (
              <li className={styles.aboutCard} key={title}>
                <AboutIcon className={styles.cardIcon} />
                <Typography variant="title2" className={styles.aboutCardTitle}>
                  {title}
                </Typography>
              </li>
            ))}
          </ul>
        </section>

        <section id="features" className={styles.features}>
          <Typography variant="h2" className={styles.sectionTitle} glitch>
            {features.title}
          </Typography>
          <div className={styles.featuresContent}>
            <div className={styles.featuresList}>
              {features.list.map(item => (
                <div className={styles.featuresListItem} key={item.title}>
                  <Typography variant="title1" className={styles.itemTitle}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" className={styles.itemText}>
                    {item.text}
                  </Typography>
                </div>
              ))}
            </div>
            <Slider />
          </div>
        </section>

        <section id="governance" className={styles.governance}>
          <div className={styles.governanceWrapper}>
            <Typography variant="h2" className={styles.sectionTitle} glitch>
              {governance.title}
            </Typography>
            <Typography
              variant="body1"
              className={classNames(
                styles.governanceText,
                styles.sectionDescription
              )}
            >
              {governance.description1}
            </Typography>
            <div className={styles.governanceList}>
              {governance.items.map(({ title, icon: GovernanceIcon }) => (
                <div className={styles.governanceListItem} key={title}>
                  <div className={styles.governanceIcon}>
                    <GovernanceIcon />
                  </div>
                  <Typography
                    variant="title2"
                    className={styles.governanceListText}
                  >
                    {title}
                  </Typography>
                </div>
              ))}
            </div>
            <Typography
              variant="body1"
              className={classNames(
                styles.governanceText,
                styles.sectionDescription
              )}
            >
              {governance.description2}
            </Typography>
          </div>
        </section>

        <section id="polkadot-benefits" className={styles.polkadot}>
          <div className={styles.content}>
            <div className={styles.text}>
              <Typography
                variant="h2"
                className={classNames(
                  styles.sectionTitle,
                  styles.polkadotTitle
                )}
                glitch
              >
                {polkadot.title}
              </Typography>
              <Typography
                variant="body1"
                className={classNames(
                  styles.polkadotText,
                  styles.sectionDescription
                )}
              >
                {polkadot.text}
              </Typography>
            </div>
            <div className={styles.infographic}>
              <Infographic />
            </div>
          </div>
          <ShapeBgSvg className={styles.polkadotBg} />
        </section>

        <section id="team" className={styles.team}>
          <Typography variant="h2" className={styles.sectionTitle} glitch>
            {team.title}
          </Typography>
          <div className={styles.teamList}>
            {team.items.map(item => (
              <div className={styles.teamCard} key={item.title}>
                <div className={styles.itemImage}>
                  <Image src={item.img} alt={item.title} />
                </div>
                <Typography variant="title2" className={styles.teamCardTitle}>
                  {item.title}
                </Typography>
                <Typography variant="body2" className={styles.teamCardText}>
                  {item.text}
                </Typography>
                <a
                  href={item.twitter}
                  target="_blank"
                  className={styles.cardLink}
                  rel="noreferrer"
                >
                  <Icon name="twitter" className={styles.twitterLink} />
                  <Typography variant="caption1">Twitter</Typography>
                </a>
              </div>
            ))}
          </div>
        </section>

        <SubsctibeSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
