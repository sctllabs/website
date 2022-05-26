import React from 'react';
import Image from 'next/image';

import styles from './Footer.module.scss';
import logo from '../../public/images/logo-white.png';
import LinkTo from '../UI-kit/LinkTo';
import { menuList, socialList } from '../../constants/menu';
import { Icon } from '../UI-kit/Icon';
import { Typography } from '../UI-kit/Typography';
import footerBottomLinks from './constants';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <LinkTo className={styles.logo} to="/">
            <Image src={logo} alt="Sociatel" />
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
            {menuList.map(social => (
              <li className={styles.menuItem} key={social.id}>
                <LinkTo to={`#${social.id}`} className={styles.link}>
                  <Typography
                    variant="title3"
                    className={styles.linkText}
                    data-text={social.name}
                  >
                    {social.name}
                  </Typography>
                </LinkTo>
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
