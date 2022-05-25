/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

interface LinkToProps extends Omit<LinkProps, 'href'> {
  to?: LinkProps['href'];
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function LinkTo({ to: href, ...props }: LinkToProps) {
  const { pathname } = useRouter();

  const customTo = `/${href || pathname}`;

  return (
    <Link href={customTo}>
      <a {...props} />
    </Link>
  );
}

LinkTo.defaultProps = {
  to: undefined,
  className: undefined,
  children: undefined,
  onClick: undefined
};
