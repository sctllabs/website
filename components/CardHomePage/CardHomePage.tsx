import React from 'react';
import classNames from 'classnames';

import { Typography } from 'components/UI-kit/Typography';

import LinkTo from 'components/UI-kit/LinkTo';
import styles from './CardHomePage.module.scss';

interface CardHomePageProps {
  title: string;
  description: string;
  img: string;
  href: string;
  className?: string;
}

const CardHomePage: React.FC<CardHomePageProps> = ({
  title,
  description,
  img,
  href,
  className
}) => {
  return (
    <LinkTo className={classNames(styles.root, className)} to={href}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={styles.content}>
          <Typography variant="title2" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="body2landing" className={styles.description}>
            {description}
          </Typography>
        </div>
      </div>
    </LinkTo>
  );
};

export default CardHomePage;
