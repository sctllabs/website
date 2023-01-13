import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { ProductPageAnimationType } from 'constants/content-product-page';

import styles from './ProductTileAnimation.module.scss';

interface ProductTileAnimationProps {
  type: ProductPageAnimationType | undefined;
  isVisible: boolean;
  className?: string;
}

const ProductTileAnimation: React.FC<ProductTileAnimationProps> = ({
  type,
  isVisible,
  className
}) => {
  const generateMedia = () => {
    let src = '';
    switch (type) {
      case ProductPageAnimationType.create:
        src = '/images/product-create.png';
        break;
      case ProductPageAnimationType.transfer:
        src = '/images/product-decentralize.png';
        break;
      case ProductPageAnimationType.transition:
        src = '/images/product-transfer.png';
        break;
      case ProductPageAnimationType.manage:
        src = '/images/product-manage.png';
        break;
      default:
        src = '';
    }

    return src ? (
      <Image src={src} width={890} height={526} quality={100} />
    ) : null;
  };

  return (
    <div
      className={classNames(styles.root, className, {
        [styles.isVisible]: isVisible
      })}
    >
      {generateMedia()}
    </div>
  );
};

export default ProductTileAnimation;
