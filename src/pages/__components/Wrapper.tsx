import React from 'react';

const Wrapper = ({ children }: React.ComponentProps<'div'>): JSX.Element => (
  <div className="px-4 min-h-screen relative pb-24">{children}</div>
);

export default Wrapper;
