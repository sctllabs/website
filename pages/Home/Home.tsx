import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './Home.module.scss';
import { Typography } from '../../components/UI-kit/Typography';
import { Icon } from '../../components/UI-kit/Icon';
import Button from '../../components/UI-kit/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { about, features, governance, polkadot, team } from './constants';
import infographic from '../../public/images/infographic.png';

const Home = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.content}>
        <section className={styles.banner}>
          <div className={styles.bannerText}>
            <Typography variant="h1" className={styles.sectionTitle} glitch>
              Organizations
            </Typography>
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
            {about.items.map(item => (
              <li className={styles.aboutCard} key={item.icon}>
                <Icon name={item.icon} className={styles.cardIcon} />
                <Typography variant="title2" className={styles.aboutCardTitle}>
                  {item.title}
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
              {governance.text1}
            </Typography>
            <div className={styles.governanceList}>
              {governance.items.map(item => (
                <div className={styles.governanceListItem} key={item.icon}>
                  <div className={styles.governanceIcon}>
                    <Icon name={item.icon} />
                  </div>
                  <Typography
                    variant="title2"
                    className={styles.governanceListText}
                  >
                    {item.title}
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
              {governance.text2}
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
              <Image src={infographic} alt="Polkadot" />
            </div>
          </div>
        </section>

        <section id="team" className={styles.team}>
          <Typography variant="h2" className={styles.sectionTitle} glitch>
            {team.title}
          </Typography>
          <div className={styles.teamList}>
            {team.items.map(item => (
              <div className={styles.teamCard} key={item.title}>
                <div className={styles.itemImage}>
                  {/* <img src="" alt="" /> */}
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

        <section className={styles.cta}>
          <Typography
            variant="h2"
            className={classNames(styles.ctaTitle, styles.sectionTitle)}
            glitch
          >
            Lorem ipsum dolor sit
          </Typography>
          <Typography
            variant="body1"
            className={classNames(styles.ctaText, styles.sectionDescription)}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non
          </Typography>
          <Button variant="primary" className={styles.ctaBtn}>
            CTA
          </Button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
