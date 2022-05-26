import { links } from 'consts';

import { LinkButton } from './Buttons';

export const Footer = (): JSX.Element => (
  <div className="w-screen max-w-7xl absolute bottom-0">
    <div className="w-full h-px bg-blue" />
    <div className="flex py-4">
      <LinkButton path={links.aboutUs}>
        <div className="text-gray-light px-4">About us</div>
      </LinkButton>
      <LinkButton path={links.termsConditions}>
        <span className="text-gray-light px-4">Terms & Conditions</span>
      </LinkButton>
    </div>
  </div>
);
