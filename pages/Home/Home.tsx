import React from 'react';

import styles from './Home.module.scss';
import { Typography } from '../../components/UI-kit/Typography';
import { Icon } from '../../components/UI-kit/Icon';
import Button from '../../components/UI-kit/Button';
import { Header } from '../../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Typography variant="h1" glitch>
          asdasd
        </Typography>
        <Icon name="bulb" />

        <Button variant="primary">asdasd</Button>
      </div>
    </div>
  );
};

export default Home;
