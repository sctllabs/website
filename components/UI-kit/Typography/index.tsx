import React, {
  ElementType,
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  useEffect,
  useRef
} from 'react';
import classNames from 'classnames';

import styles from './Typography.module.scss';

type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'paragraph1'
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'caption2';

export interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  variant: TypographyVariants;
  glitch?: boolean;
}

const elementsByVariants: Record<TypographyVariants, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  title1: 'h3',
  title2: 'h4',
  title3: 'h5',
  paragraph1: 'p',
  body1: 'div',
  body2: 'div',
  caption1: 'span',
  caption2: 'span'
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as, children, variant, glitch, className, ...restProps }, ref) => {
    const Tag = as || elementsByVariants[variant];
    const glitchRef = useRef<HTMLElement | null>(null);

    // todo: move to separate component
    useEffect(() => {
      if (!glitch) {
        return;
      }

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('start-animation');
          }
        });
      });

      if (glitchRef.current) {
        observer.observe(glitchRef.current);
      }
    }, [glitch, glitchRef]);

    const handleRef = (node: HTMLElement) => {
      glitchRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        const mutableRefObject = ref as MutableRefObject<HTMLElement>;
        mutableRefObject.current = node;
      }
    };

    return glitch ? (
      <Tag
        className={classNames(styles[variant], styles.glitch, className)}
        data-text={children}
        {...restProps}
        ref={handleRef}
      >
        {children}
        <span ref={glitchRef} className={styles.gradient}>
          {children}
        </span>
      </Tag>
    ) : (
      <Tag
        className={classNames(styles[variant], className)}
        {...restProps}
        ref={ref}
      >
        {children}
      </Tag>
    );
  }
);
