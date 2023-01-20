/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import useOnClickOutside from 'hooks/useOnClickOutside';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import styles from './DropdownButton.module.scss';

export interface DropdownButtonProps {
  forceOpen?: boolean;
  buttonText?: string | number | null;
  children: React.ReactNode;
  showArrow?: boolean;
  disabled?: boolean;
  openTop?: boolean;
  className?: string;
  buttonClassName?: string;
  textClassName?: string;
  dropdownClassName?: string;
  buttonActiveClassName?: string;
  arrowClassName?: string;
  onOpen?: (isOpen: boolean) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  className,
  forceOpen = false,
  buttonText,
  children,
  showArrow = true,
  disabled,
  openTop = false,
  buttonClassName,
  textClassName,
  dropdownClassName,
  arrowClassName,
  buttonActiveClassName,
  onOpen
}) => {
  const [isOpen, setIsOpen] = useState(forceOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const childrenWithCloseOnClick =
    children &&
    React.Children.map(children, child =>
      React.cloneElement(child as React.ReactElement<any>, {
        onClick: () => {
          (child as any).props.onClick?.();
          setIsOpen(false);
        }
      })
    );

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className={classNames(styles.root, className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          onOpen?.(!isOpen);
        }}
        disabled={disabled}
        className={classNames(
          styles.button,
          buttonClassName,
          {
            [styles.active]: isOpen
          },
          buttonActiveClassName && isOpen && buttonActiveClassName
        )}
      >
        {buttonText && (
          <Typography
            className={classNames(styles.text, textClassName)}
            variant="title3"
            data-text={buttonText}
          >
            {buttonText}
          </Typography>
        )}
        {showArrow && (
          <Icon
            name="chevron-down"
            className={classNames(
              styles.arrow,
              { [styles.up]: isOpen },
              arrowClassName
            )}
          />
        )}
      </button>
      <div
        className={classNames(styles.dropdown, dropdownClassName, {
          [styles.open]: isOpen,
          [styles.top]: openTop
        })}
      >
        {childrenWithCloseOnClick}
      </div>
    </div>
  );
};

export default DropdownButton;
