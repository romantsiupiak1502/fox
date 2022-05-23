import { links } from '../consts';

import { LinkButton } from './Buttons';
import { Logo } from './Logo';
import { SearchIcon } from './Icons';
import { PrimaryButton } from './PrimaryButton';

export const NavBar = (): JSX.Element => {
  return (
    <div className="h-12 w-screen flex max-w-7xl items-center justify-between">
      <Logo />
      <LinkButton path={links.aboutUs}>
        <div className="text-gray-light">About us</div>
      </LinkButton>
      <div className="flex w-32 justify-between items-center">
        <SearchIcon className="cursor-pointer" />
        <PrimaryButton text="Sign in" />
      </div>
    </div>
  );
};
