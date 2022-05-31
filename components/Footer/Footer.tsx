import React from 'react';
import Lottie from 'react-lottie';

import LinkTo from 'components/UI-kit/LinkTo';
import { Typography } from 'components/UI-kit/Typography';
import { menuList, socialList } from 'constants/menu';

import logoAnimationData from 'animation/logo-footer.json';
import footerBottomLinks from './constants';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <LinkTo className={styles.logo} to="/">
            <Lottie
              options={{
                autoplay: true,
                loop: true,
                animationData: logoAnimationData
              }}
            />
          </LinkTo>
          <ul className={styles.social}>
            {socialList.map(({ icon: SocialIcon, link }) => (
              <li className={styles.socialItem} key={link}>
                <a href={link} target="_blank" rel="noreferrer">
                  <SocialIcon className={styles.socialIcon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {menuList.map(menuItem => (
              <li className={styles.menuItem} key={menuItem.id}>
                {menuItem.href ? (
                  <a
                    href={menuItem.href}
                    target="_blank"
                    className={styles.link}
                    rel="noreferrer"
                  >
                    <Typography
                      variant="title3"
                      className={styles.linkText}
                      data-text={menuItem.name}
                    >
                      {menuItem.name}
                    </Typography>
                  </a>
                ) : (
                  <LinkTo
                    to={menuItem.href || `#${menuItem.id}`}
                    className={styles.link}
                  >
                    <Typography
                      variant="title3"
                      className={styles.linkText}
                      data-text={menuItem.name}
                    >
                      {menuItem.name}
                    </Typography>
                  </LinkTo>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <Typography variant="caption2" className={styles.copyright}>
            © Societal Labs Ltd. All rights reserved
          </Typography>
          <ul className={styles.bottomLinks}>
            {footerBottomLinks.map(item => (
              <li className={styles.bottomLinkItem} key={item.id}>
                <LinkTo to={item.link} className={styles.bottomLinkText}>
                  {item.title}
                </LinkTo>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
