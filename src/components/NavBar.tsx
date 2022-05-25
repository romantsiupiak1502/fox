import { links } from 'consts';

import { Logo } from './Logo';
import { SearchIcon } from './Icons';
import { PrimaryButton } from './PrimaryButton';
import { LinkButton } from './Buttons';

export const NavBar = (): JSX.Element => {
  return (
    <div className="h-12 w-screen flex max-w-7xl items-center justify-between">
      <LinkButton path={links.home}>
        <Logo />
      </LinkButton>
      <div className="flex w-32 justify-between items-center">
        <SearchIcon className="cursor-pointer" />
        <PrimaryButton text="Sign in" />
      </div>
    </div>
  );
};
