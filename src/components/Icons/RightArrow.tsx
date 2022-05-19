import React from 'react';

export const RightArrow = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg width="20" height="20" fill="none" {...props}>
    <path d="m10 17 5-5-5-5" stroke="#4540DB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
