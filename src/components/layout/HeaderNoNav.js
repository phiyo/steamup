import React from 'react';
import LogoIcon from '../../svg/LogoIcon';

const Header = () => (
  <header className="sticky z-10 top-0 bg-primary-yellow">
    <div className="container flex flex-col sm:flex-row justify-center items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-48">
          <a href="https://hotbananagame.com">
            <LogoIcon />
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
