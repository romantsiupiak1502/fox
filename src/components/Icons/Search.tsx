import React from 'react';

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg width="24" height="24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 2a7.965 7.965 0 0 0 4.906-1.68l4.387 4.387a1 1 0 0 0 1.414-1.414l-4.387-4.387A8 8 0 1 0 10 18ZM8.5 8.677A1.993 1.993 0 0 1 10 8a1 1 0 1 0 0-2 3.993 3.993 0 0 0-3 1.354C6.378 8.058 6 8.986 6 10a1 1 0 1 0 2 0c0-.508.188-.97.5-1.323Z"
      fill="#666"
    />
  </svg>
);
