import React from 'react';

type PrimaryButtonProps = {
  text: string;
} & React.ComponentProps<'button'>;

export const PrimaryButton = ({ text }: PrimaryButtonProps): JSX.Element => (
  <button type="button" className="bg-blue px-5 py-1 rounded">
    <span className="text-white text-xs">{text}</span>
  </button>
);
