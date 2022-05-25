/* eslint-disable react/require-default-props */
import React from 'react';
import cn from 'classnames';

import icons from '../../../icons';

export type IconNamesType = keyof typeof icons;

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  className?: string;
  name: IconNamesType;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

export function Icon({ className, name, onClick, ...other }: IconProps) {
  const { viewBox, url } = icons[name] as never;

  return (
    <svg
      viewBox={viewBox}
      className={cn(className)}
      onClick={onClick}
      {...other}
    >
      <use xlinkHref={`/_next/${String(url)}`} />
    </svg>
  );
}
