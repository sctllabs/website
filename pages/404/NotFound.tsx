import React from 'react';
import { useRouter } from 'next/router';
import styles from './NotFound.module.scss';

import { Typography } from '../../components/UI-kit/Typography';
import Button from '../../components/UI-kit/Button';
import { Icon } from '../../components/UI-kit/Icon';

const NotFound = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Icon name="not-found" />
        <Typography variant="title3" className={styles.text}>
          Something went wrong...
        </Typography>
        <Button variant="primary" onClick={handleClick}>
          Go back to Main page
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
