import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';

const Header = () => (
  <header className="sticky top-0 bg-primary-yellow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-48">
          <AnchorLink href="#top">
            <LogoIcon />
          </AnchorLink>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 uppercase font-bold text-sm md:text-base">
        <AnchorLink className="px-4" href="#overview">
          Overview
        </AnchorLink>
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#play">
          Play
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
