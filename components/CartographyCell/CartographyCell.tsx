import React from 'react';
import classNames from 'classnames';

import { Typography } from 'components/UI-kit/Typography';

import styles from './CartographyCell.module.scss';

interface CartographyCellProps {
  head: string;
  steps: string[];
  className?: string;
}

const CartographyCell: React.FC<CartographyCellProps> = ({
  head,
  steps,
  className
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Typography variant="title3" className={styles.head}>
        {head}
      </Typography>

      <div className={styles.stepsWrapper}>
        {steps.map(step => (
          <div key={step} className={styles.step}>
            <div className={styles.mark} />
            <Typography variant="button1">{step}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartographyCell;
