import React from 'react';
import Head from 'next/head';

type HeadWrapperProps = {
  title: string;
} & React.ComponentProps<'div'>;

const HeadWrapper = ({ title, children }: HeadWrapperProps): JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </div>
);

export default HeadWrapper;
