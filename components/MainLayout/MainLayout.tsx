import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import cn from 'classnames';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  title?: string;
  className?: string;
}

const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
  title = 'Societal',
  children,
  className
}) => {
  return (
    <div className={styles.root}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={cn(styles.content, className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
