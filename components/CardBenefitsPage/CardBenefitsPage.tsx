import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { Typography } from 'components/UI-kit/Typography';

import styles from './CardBenefitsPage.module.scss';

interface CardBenefitsPageProps {
  title: string;
  description: string;
  img: string;
  imgPsn: string;
  className?: string;
}

const CardBenefitsPage: React.FC<CardBenefitsPageProps> = ({
  title,
  description,
  img,
  imgPsn,
  className
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Image src={img} width={400} height={400} />
      <div className={classNames(styles.text, styles[imgPsn])}>
        <Typography variant="h2" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={styles.description}>
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default CardBenefitsPage;
