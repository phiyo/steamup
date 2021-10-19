import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';

const Header = () => (
  <header className="sticky top-0 bg-primary-yellow">
    <div className="container flex flex-col sm:flex-row justify-center items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-48">
          <AnchorLink href="#top">
            <LogoIcon />
          </AnchorLink>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
