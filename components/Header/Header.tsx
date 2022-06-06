import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Lottie from 'react-lottie';

import { Typography } from 'components/UI-kit/Typography';
import LinkTo from 'components/UI-kit/LinkTo';
import { menuList } from 'constants/menu';

import logoAnimationData from 'animation/logo-header.json';

import styles from './Header.module.scss';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);

  const updateScrollPosition = () => {
    setFixedHeader(window.pageYOffset > 400);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
  });

  return (
    <div
      className={classNames(styles.header, {
        [styles.active]: open,
        [styles.fixed]: fixedHeader
      })}
    >
      <div className={styles.headerContainer}>
        <LinkTo className={styles.logo} to="/">
          <Lottie
            options={{
              autoplay: true,
              loop: true,
              animationData: logoAnimationData
            }}
          />
        </LinkTo>
        <div
          className={classNames(styles.menuIcon, {
            [styles.open]: open
          })}
          onClick={() => setOpen(!open)}
          onKeyPress={() => setOpen(!open)}
          role="button"
          tabIndex={0}
        >
          <div className={styles.icon} />
        </div>
      </div>
      <div className={styles.headerMenu}>
        <div className={styles.menuContainer}>
          <ul className={styles.menuList}>
            {menuList.map(menu => (
              <li key={menu.id} className={styles.menuItem}>
                {menu.external ? (
                  <a
                    className={styles.menuItemLink}
                    href={menu.href}
                    target="_blank"
                    onClick={() => setOpen(false)}
                    rel="noreferrer"
                  >
                    <Typography
                      className={styles.menuItemText}
                      variant="title3"
                      data-text={menu.name}
                    >
                      {menu.name}
                    </Typography>
                  </a>
                ) : (
                  <LinkTo
                    className={styles.menuItemLink}
                    to={`/#${menu.id}`}
                    onClick={() => setOpen(false)}
                  >
                    <Typography
                      className={styles.menuItemText}
                      variant="title3"
                      data-text={menu.name}
                    >
                      {menu.name}
                    </Typography>
                  </LinkTo>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
