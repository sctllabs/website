import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { Typography } from 'components/UI-kit/Typography';

import styles from './CardTeam.module.scss';

interface CardTeamProps {
  name: string;
  position: string;
  img: string;
  dotAngle: number;
  className?: string;
}

const CardTeam: React.FC<CardTeamProps> = ({
  name,
  position,
  img,
  dotAngle,
  className
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div
        className={styles.decoration}
        style={{ transform: `rotate(${dotAngle}deg)` }}
      >
        <Image
          src="/images/team/circle-dot.svg"
          width={188}
          height={188}
          objectFit="contain"
          layout="fixed"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.photo}>
          <Image
            src={img}
            width={120}
            height={120}
            objectFit="cover"
            layout="fixed"
          />
        </div>
        <Typography variant="title3">{name}</Typography>
        <Typography variant="caption1" className={styles.position}>
          {position}
        </Typography>
      </div>
    </div>
  );
};

export default CardTeam;
