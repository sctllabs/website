/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectCoverflow, Autoplay, SwiperOptions } from 'swiper';
import classNames from 'classnames';

import { Typography } from '../UI-kit/Typography';

import styles from './Slider.module.scss';

export const sliderItems = [
  'Private Assets & Voting',
  'Built-in MultiSig',
  'Zero Gas Fees',
  'Chain Agnostic',
  'Cross-DAO Marketplace',
  'Built-in Governance'
];

const Slider = () => {
  const [vertical, setVertical] = useState(false);

  const handleResize = () => {
    setVertical(window.innerWidth > 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  const settings: SwiperOptions = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    effect: 'coverflow',
    grabCursor: true,
    direction: vertical ? 'vertical' : 'horizontal',
    centeredSlides: true,
    slidesPerView: 3,
    modules: [EffectCoverflow, Autoplay],
    coverflowEffect: {
      rotate: 0,
      stretch: 60,
      depth: 200,
      modifier: 1,
      slideShadows: false
    }
  };

  return (
    <div
      className={classNames(styles.swiperWrapper, {
        [styles.vertical]: vertical
      })}
    >
      <Swiper
        className={classNames(styles.slider, {
          [styles.vertical]: vertical
        })}
        {...settings}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide className={styles.item} key={item}>
            <div className={classNames(styles[`bg-${index + 1}`], styles.bg)} />
            <Typography variant="body1" className={styles.text}>
              {item}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
