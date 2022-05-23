import React from 'react';
import Link from 'next/link';

type LinkButtonProps = {
  path: string;
  children: React.ReactChild;
};

export const LinkButton = ({ path, children }: LinkButtonProps): JSX.Element => (
  <Link href={path} passHref={true}>
    <a>{children}</a>
  </Link>
);
