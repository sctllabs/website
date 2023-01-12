import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { ProductPageAnimationType } from 'constants/content-product-page';

import styles from './ProductTileAnimation.module.scss';

interface ProductTileAnimationProps {
  type: ProductPageAnimationType | undefined;
  className?: string;
}

const ProductTileAnimation: React.FC<ProductTileAnimationProps> = ({
  type,
  className
}) => {
  const generateMedia = () => {
    let src = '';
    switch (type) {
      case ProductPageAnimationType.create:
        src = '/images/product-create.png';
        break;
      case ProductPageAnimationType.transfer:
        src = '/images/product-transfer.png';
        break;
      case ProductPageAnimationType.transition:
        src = '/images/product-transition.png';
        break;
      case ProductPageAnimationType.manage:
        src = '/images/product-manage.png';
        break;
      default:
        src = '';
    }

    return src ? (
      <Image src={src} width={614} height={340} quality={100} />
    ) : null;
  };
  return (
    <div className={classNames(styles.root, className)}>{generateMedia()}</div>
  );
};

export default ProductTileAnimation;
