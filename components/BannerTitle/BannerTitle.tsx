import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Typography } from '../UI-kit/Typography';

import styles from './BannerTitle.module.scss';

interface BannerTitleProps {
  className?: string;
  titles: string[];
}

const BannerTitle = ({ titles, className }: BannerTitleProps) => {
  const [active, setActive] = useState(0);
  const refEl = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = refEl.current;

    const handler = (e: any) => {
      if (e.animationName.indexOf('glitch-anim-2') !== -1) {
        setActive(prevActive => (prevActive + 1) % titles.length);
        node?.classList.remove(styles.glitch);

        setTimeout(() => {
          node?.classList.add(styles.glitch);
        }, 2000);
      }
    };

    setTimeout(() => {
      node?.classList.add(styles.glitch);
    }, 2000);

    node?.addEventListener('animationend', handler);

    return () => {
      node?.removeEventListener('animationend', handler);
    };
  }, [titles]);

  return (
    <Typography
      variant="headingXxl"
      className={classNames(styles.root, className)}
    >
      <span
        className={classNames(styles.text)}
        ref={refEl}
        data-text={titles[active]}
      >
        {titles[active]}
        <span className={styles.gradient}>{titles[active]}</span>
      </span>
    </Typography>
  );
};

export default BannerTitle;
