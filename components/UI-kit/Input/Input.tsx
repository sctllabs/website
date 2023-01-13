import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import { Typography } from '../Typography';

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  className?: string;
  helperText?: string;
  helperTextColor?: string;
};

const Input: React.FC<InputProps> = ({
  className,
  helperText,
  helperTextColor,
  ...rest
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <input className={styles.input} {...rest} />
      {helperText && (
        <Typography
          variant="caption2"
          style={{ color: helperTextColor }}
          className={styles.helper}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default Input;
