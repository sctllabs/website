import React from 'react';
import Lottie from 'react-lottie';

import LinkTo from 'components/UI-kit/LinkTo';
import { Icon } from 'components/UI-kit/Icon';
import { Typography } from 'components/UI-kit/Typography';
import { menuList, socialList } from 'constants/menu';

import logoAnimationData from 'animation/logo-footer.json';

import styles from './Footer.module.scss';
import footerBottomLinks from './constants';

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
            {socialList.map(social => (
              <li className={styles.socialItem} key={social.id}>
                <a href={social.link} target="_blank" rel="noreferrer">
                  <Icon name={social.id} className={styles.socialIcon} />
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
            © Societal. All rights reserved
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
