import React from 'react';

import styles from './Home.module.scss';
import { Typography } from '../../components/UI-kit/Typography';
import { Icon } from '../../components/UI-kit/Icon';
import Button from '../../components/UI-kit/Button';

const Home = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h1" glitch>
        asdasd
      </Typography>
      <Icon name="bulb" />

      <Button variant="primary">asdasd</Button>
    </div>
  );
};

export default Home;
