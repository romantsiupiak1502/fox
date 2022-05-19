import React from 'react';
import clsx from 'clsx';

type IconTextButtonProps = {
  text: string;
  icon: JSX.Element;
  wrapperClassName?: string;
} & React.ComponentProps<'button'>;

export const IconTextButton = ({ text, icon, wrapperClassName, ...rest }: IconTextButtonProps): JSX.Element => (
  <button type="button" className={clsx('flex', wrapperClassName)} {...rest}>
    <span className="text-sm text-blue">{text}</span>
    {icon}
  </button>
);
