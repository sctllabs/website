import React, { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import styles from './Header.module.scss';
import LinkTo from '../UI-kit/LinkTo';
import logo from '../../public/images/logo.png';
import { menuList } from '../../constants/menu';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={classNames(styles.header, {
        [styles.active]: open
      })}
    >
      <div className={styles.headerContainer}>
        <LinkTo className={styles.logo} to="/">
          <Image src={logo} alt="" />
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
                <LinkTo to={`#${menu.id}`} onClick={() => setOpen(false)}>
                  {menu.name}
                </LinkTo>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
