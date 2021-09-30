import React from 'react';
import LogoOutlineIcon from '../../svg/LogoOutlineIcon';

const Footer = () => (
  <footer className="container mx-auto py-20 px-3 text-gray-800 text-center md:text-left md:max-w-screen-md">
    <div className="md:flex md:-mx-3">
      <div className="mb-10 md:flex md:flex-auto px-3">
        <div className="w-40 lg:w-64 mx-auto md:-mt-4 lg:-mt-6">
          <LogoOutlineIcon />
        </div>
        <div className="mb-10 md:flex-auto px-3">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="mt-5 mb-10">Canadian Indie board game designers & publisher. Developing Asian theme board games by Asians.</p>
        </div>
      </div>
      <div className="md:flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.facebook.com/hotbananagame" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/hotbananagame" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/hotbananagame" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="https://boardgamegeek.com/boardgame/307561/steam-feast-dim-sum" target="_blank" rel="noopener noreferrer">Boardgamegeek</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
