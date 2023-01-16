import React, { useState } from 'react';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import Lottie from 'react-lottie';
import classNames from 'classnames';

import MainLayout from 'components/MainLayout';
import { Typography } from 'components/UI-kit/Typography';
import TEXT_TILES_PRODUCT_PAGE, {
  ProductPageAnimationType
} from 'constants/content-product-page';
import ProductTileAnimation from 'components/ProductTileAnimation';
import appStoreAnimationData from 'animation/product-app-store.json';

import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const [slides, setSlides] = useState({
    create: true,
    decentralize: false,
    transfer: false,
    manage: false
  });

  return (
    <MainLayout className={styles.layout} title="Product | Societal">
      <div className={styles.firstSlide}>
        <Typography
          variant="display1"
          className={classNames(styles.heading, styles.main)}
          data-text="The Operating System for DAOs."
        >
          The Operating System for DAOs.
        </Typography>
        <Image
          src="/images/product-page-hero-image.png"
          width={517}
          height={517}
          objectFit="contain"
        />
      </div>
      <div className={styles.stickyWrapper}>
        <div className={styles.textBlocksWrapper}>
          {TEXT_TILES_PRODUCT_PAGE.map(tile => (
            <InView
              threshold={0.5}
              rootMargin="-90px"
              className={styles.tileWrapper}
              onChange={inView => {
                if (inView) {
                  const copy = Object.keys(slides).reduce(
                    (accumulator, key) => {
                      return { ...accumulator, [key]: false };
                    },
                    {} as typeof slides
                  );

                  setSlides({ ...copy, [tile.id]: true });
                } else {
                  setSlides({ ...slides, [tile.id]: false });
                }
              }}
            >
              <Typography
                variant="h2"
                className={styles.heading}
                data-text={tile.title}
              >
                {tile.title}
              </Typography>
              <Typography variant="body1">{tile.description}</Typography>
              <ProductTileAnimation
                type={tile.id}
                isVisible
                className={styles.tileAnimationMobile}
              />
            </InView>
          ))}
        </div>
        <div className={styles.stickyElement}>
          {Object.keys(slides).map(el => (
            <ProductTileAnimation
              type={el as ProductPageAnimationType}
              isVisible={slides[el as keyof typeof slides]}
              className={styles.stickySlide}
            />
          ))}
        </div>
      </div>
      <div className={styles.slide}>
        <div className={styles.slideWrapper}>
          <Typography
            variant="h2"
            className={styles.heading}
            data-text="The “Shopify App Store” for DAOs"
          >
            The “Shopify App Store” for DAOs
          </Typography>
          <Typography variant="body1">
            Existing and future tooling can deploy on Societal chain’s
            EVM-layer, empowering users to build the operating system that best
            suits their needs.
          </Typography>
        </div>
        <div className={styles.lottieWrapper}>
          <Lottie
            options={{
              autoplay: true,
              loop: true,
              animationData: appStoreAnimationData
            }}
          />
        </div>
      </div>
      <div className={styles.slide}>
        <div className={styles.slideWrapper}>
          <Typography
            variant="h2"
            className={styles.heading}
            data-text="The Future is DAO"
          >
            The Future is DAO
          </Typography>
          <Typography variant="body1">
            Stay up to date by finding, following, and joining existing DAOs on
            the “Discover” page - all in one place.
          </Typography>
        </div>
        <div className={styles.lottieWrapper}>
          <Lottie
            options={{
              autoplay: true,
              loop: true,
              animationData: appStoreAnimationData
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductPage;
