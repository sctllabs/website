import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { Typography } from 'components/UI-kit/Typography';

import styles from './CardAdvisor.module.scss';

interface CardTeamProps {
  name: string;
  position: string;
  img: string;
  logo: string;
  className?: string;
}

const CardAdvisor: React.FC<CardTeamProps> = ({
  name,
  position,
  img,
  logo,
  className
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Image src={img} width={120} height={120} objectFit="contain" />
      <div className={styles.content}>
        <Typography variant="title3">{name}</Typography>
        <Typography variant="caption1" className={styles.position}>
          {position}
        </Typography>
        <Image
          src={logo}
          width={140}
          height={20}
          objectFit="contain"
          layout="fixed"
          objectPosition="left center"
        />
      </div>
    </div>
  );
};

export default CardAdvisor;
