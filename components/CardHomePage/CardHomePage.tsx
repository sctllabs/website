import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

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
      <Typography variant="title2" className={styles.title}>
        {title}
      </Typography>
      <Typography variant="body2" className={styles.description}>
        {description}
      </Typography>
      <Image src={img} layout="responsive" width={536} height={246} />
    </LinkTo>
  );
};

export default CardHomePage;
