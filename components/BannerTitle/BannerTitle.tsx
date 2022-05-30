import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Typography } from '../UI-kit/Typography';

interface BannerTitleProps {
  className?: string;
  titles: string[];
}

const BannerTitle = ({ titles, className }: BannerTitleProps) => {
  const [fadeIn, setFadeIn] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (active < titles.length - 1) {
        setActive(active + 1);
        setFadeIn(true);
      } else {
        clearInterval(interval);
      }
    }, 10000);

    const timeout = setTimeout(() => {
      if (active < titles.length - 1) {
        setFadeIn(false);
      } else {
        clearTimeout(timeout);
      }
    }, 8000);
  }, [active, titles]);

  return (
    <Typography
      variant="h1"
      className={classNames(className)}
      data-text={titles[active]}
      glitch
      style={{ opacity: fadeIn ? 1 : 0 }}
    >
      {titles[active]}
    </Typography>
  );
};

export default BannerTitle;
