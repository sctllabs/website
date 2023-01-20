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
  isProductPage?: boolean;
  className?: string;
}

const CardTextMedia: React.FC<CardTextMediaProps> = ({
  title,
  description,
  descriptionSecondary,
  img,
  imgPsn,
  isProductPage = false,
  className
}) => {
  const imgWidth = !isProductPage ? 400 : 690;
  return (
    <div
      className={classNames(
        styles.root,
        { [styles.productPage]: isProductPage },
        className
      )}
    >
      <Image src={img} width={imgWidth} height={400} objectFit="contain" />
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
