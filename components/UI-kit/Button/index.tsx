/* eslint-disable react/button-has-type */
import React, { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'primary' | 'secondary';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, ...btnProps }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(styles.button, styles[variant], className)}
        {...btnProps}
      >
        <span className={styles.button__content}>{children}</span>
      </button>
    );
  }
);

export default Button;
