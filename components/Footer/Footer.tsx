import React from 'react';
import Lottie from 'react-lottie';
import classNames from 'classnames';
import Image from 'next/image';

import LinkTo from 'components/UI-kit/LinkTo';
import { Typography } from 'components/UI-kit/Typography';
import { menuList, menuResources, socialList } from 'constants/menu';

import logoAnimationData from 'animation/logo-footer.json';
import DropdownButton from 'components/UI-kit/DropdownButton';
import footerBottomLinks from './constants';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.footerMediaWrapper}>
        <div className={classNames(styles.cloud, styles.left)}>
          <Image
            src="/images/footer-left-cloud.png"
            width={282}
            height={92}
            objectFit="contain"
          />
        </div>

        <div className={classNames(styles.cloud, styles.right)}>
          <Image
            src="/images/footer-right-cloud.png"
            width={282}
            height={92}
            objectFit="contain"
          />
        </div>

        <Image
          src="/images/footer-mountain.png"
          width={507}
          height={144}
          objectFit="contain"
          objectPosition="bottom"
          className={styles.mountain}
        />
      </div>
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
              {[...menuList, ...menuResources].map(menuItem => (
                <li
                  className={classNames(styles.menuItem, {
                    [styles.mobileOnly]: menuItem.isExternal
                  })}
                  key={menuItem.id}
                >
                  {menuItem.isExternal ? (
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
                    <LinkTo to={menuItem.href} className={styles.link}>
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
              <DropdownButton
                buttonText="Resources"
                className={classNames(styles.menuItem, styles.dropdownButton)}
                textClassName={styles.linkText}
                arrowClassName={styles.linkText}
                openTop
              >
                <div className={styles.dropdownButtonMenu}>
                  {menuResources.map(el => (
                    <a
                      href={el.href}
                      target="_blank"
                      key={el.id}
                      rel="noreferrer"
                      className={styles.dropdownButtonItem}
                    >
                      <Typography
                        className={styles.menuItemText}
                        variant="title3"
                        data-text={el.name}
                      >
                        {el.name}
                      </Typography>
                    </a>
                  ))}
                </div>
              </DropdownButton>
            </ul>
          </div>
          <div className={styles.footerBottom}>
            <Typography variant="caption2" className={styles.copyright}>
              © Societal Labs Ltd. All rights reserved
            </Typography>
            <ul className={styles.bottomLinks}>
              {footerBottomLinks.map(item => (
                <li key={item.id}>
                  <LinkTo to={item.link} className={styles.bottomLinkText}>
                    {item.title}
                  </LinkTo>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
