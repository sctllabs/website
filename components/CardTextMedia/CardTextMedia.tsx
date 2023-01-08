import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { Typography } from 'components/UI-kit/Typography';

import styles from './CardTextMedia.module.scss';

interface CardTextMediaProps {
  title: string;
  description: string;
  descriptionSecondary?: string;
  img: string;
  imgPsn: string;
  className?: string;
}

const CardTextMedia: React.FC<CardTextMediaProps> = ({
  title,
  description,
  descriptionSecondary,
  img,
  imgPsn,
  className
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Image src={img} width={400} height={400} />
      <div className={classNames(styles.text, styles[imgPsn])}>
        <Typography variant="h2" className={styles.title} data-text={title}>
          {title}
        </Typography>
        <Typography variant="body1" className={styles.description}>
          {description}
        </Typography>
        {descriptionSecondary && (
          <Typography variant="body1">{descriptionSecondary}</Typography>
        )}
      </div>
    </div>
  );
};

export default CardTextMedia;
