import React, { useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Lottie from 'react-lottie';

import { Typography } from 'components/UI-kit/Typography';
import LinkTo from 'components/UI-kit/LinkTo';
import { menuList, menuResources } from 'constants/menu';
import logoAnimationData from 'animation/logo-header.json';
import DropdownButton from 'components/UI-kit/DropdownButton';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <div
      className={classNames(styles.header, {
        [styles.active]: open
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
        <div className={styles.menuDesktop}>
          {menuList.map(link => (
            <LinkTo
              className={classNames(styles.menuItem, {
                [styles.active]: pathname === link.href
              })}
              to={link.href}
              key={link.id}
              onClick={() => setOpen(false)}
            >
              <Typography
                className={styles.menuItemText}
                variant="title3"
                data-text={link.name}
              >
                {link.name}
              </Typography>
            </LinkTo>
          ))}
          <DropdownButton
            buttonText="Resources"
            className={styles.menuItemText}
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
        </div>

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
            {[...menuList, ...menuResources].map(link => (
              <li key={link.id} className={styles.menuItem}>
                {link?.isExternal ? (
                  <a
                    className={styles.menuItemLink}
                    href={link.href}
                    target="_blank"
                    onClick={() => setOpen(false)}
                    rel="noreferrer"
                  >
                    <Typography
                      className={styles.menuItemText}
                      variant="title3"
                      data-text={link.name}
                    >
                      {link.name}
                    </Typography>
                  </a>
                ) : (
                  <LinkTo
                    className={styles.menuItemLink}
                    to={link.href}
                    onClick={() => setOpen(false)}
                  >
                    <Typography
                      className={styles.menuItemText}
                      variant="title3"
                      data-text={link.name}
                    >
                      {link.name}
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
