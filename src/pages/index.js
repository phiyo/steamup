import React from 'react';
import { Helmet } from "react-helmet"
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import OverviewIcons from '../assets/images/overview-icons.png';
import AwardIcons from '../svg/AwardIcons';
import OGImage from '../assets/og-image/index.jpg';
import FeatureImage from '../assets/images/box.png';
import SpreadImage from '../assets/images/spread.png';
import SteamupLogo from '../svg/SteamupLogo';
import SteamupWhiteLogo from '../svg/SteamupWhiteLogo';
import SteamersImage from '../assets/images/steamers.jpg';
import DimSumImage from '../assets/images/dimsum.jpg';
import CharacterImage from '../assets/images/characters.jpg';
import DesignersImage from '../assets/images/designers.jpg';
import TurntableImage from '../assets/images/turntable.gif';
import KickstarterLogo from '../svg/KickstarterLogo';
import SubscribeBox from '../components/Subscribe.js';

const Index = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Steam Up: A Feast of Dim Sum</title>
      <meta name="description" content="A competitive medium-light weight Dim Sum collection tabletop game offering an authentic cultural experience." />
      <meta property="og:url" content="https://hotbananagame.com" />
      <meta property="og:title" content="Steam Up: A Feast of Dim Sum - Kickstarter October 19th, 2021" />
      <meta property="og:description" content="A competitive medium-light weight Dim Sum collection tabletop game offering an authentic cultural experience." />
      <meta name="twitter:title" content="Steam Up: A Feast of Dim Sum - Kickstarter October 19th, 2021 " />
      <meta name="twitter:description" content="A competitive medium-light weight Dim Sum collection tabletop game offering an authentic cultural experience." />
    </Helmet>
    <section id="top" className="py-20 bg-feature-img bg-cover bg-no-repeat bg-center text-white">
      <div className="container mx-auto px-8 sm:flex">
        <div className="m-auto w-1/2 sm:pr-10 md:pr-16">
          <img className="hidden" src={OGImage} alt="Steam Up - Kickstarter Oct 19, 2021" />
          <img src={FeatureImage} alt="Steam Up: A Feast of Dim Sum" />
        </div>
        <div className="text-center sm:text-left sm:w-1/2 xl:w-2/3 pt-4 sm:pt-4 md:pt-8 lg:pt-20">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none xl:mr-40">
            Delicious Dim Sum Feast Awaits You
          </h1>
          <p className="text-xl lg:text-2xl mt-4 mb-2">
            You are invited! Become a VIP.
          </p>
          <SubscribeBox textAlign="text-center sm:text-left" />
        </div>
      </div>
    </section>
    <section id="overview" className="pt-12 sm:pt-20 text-center md:text-left bg-cloud bg-no-repeat bg-cover">
      <div className="container mx-auto">
        <div className="w-3/4 max-w-xs m-auto mb-4 md:hidden">
          <div className="pl-5">
            <SteamupLogo />
          </div>
        </div>
        <div className="md:flex sm:mb-10">
          <div className="w-full lg:w-2/5 xl:w-1/3 m-0 pb-10 md:p-5 md:pt-5 border-b border-gray-400 md:border-b-0 md:border-r">
            <p className="m-5 md:m-0 md:pb-5 text-lg">A competitive medium-light weight Dim Sum collection tabletop game offering an authentic cultural experience.</p>
            <img className="m-auto max-w-xs md:w-full md:mx-0" src={OverviewIcons} alt="2-5 Players, 40-60 Min., Age 14+" />
          </div>
          <div className="pt-5 m-5 sm:pt-0 lg:ml-10 xl:ml-15 lg:w-3/5 xl:w-2/3">
            <p className="mb-5 text-lg">Welcome to Steam Up, a world-renowned Dim Sum restaurant, that only serves a limited quantity of their most popular Dim Sum everyday.</p>
            <h3 className="mb-10 md:mb-0 text-lg lg:text-2xl font-semibold lg:leading-snug">
              Become 1 of the 12 animal characters with unique abilities. Prepare and compete to devour as much Dim Sum as possible, leaving the table with the fullest stomach.
            </h3>
          </div>
        </div>
        <div className="bg-mountains bg-bottom bg-no-repeat bg-150% md:bg-contain pb-40 lg:pb-48">
          <img src={SpreadImage} alt="Steam Up: A Feast of Dim Sum (Delxue Edition)" />
        </div>
        <div className="md:flex md:border-t md:border-b md:border-gray-400 md:justify-center text-center">
          <div className="border-t border-b border-gray-400 md:flex-none md:m-0 md:border-0">
            <div className="p-5 w-3/4 max-w-xs sm:w-1/2 m-auto md:w-64 md:max-w-screen-md">
              <KickstarterLogo />
              <p className="font-semibold text-xl md:text-2xl">October 19th, 2021</p>
            </div>
          </div>
          <div className="p-5 w-full sm:max-w-md sm:m-auto md:flex-auto md:p-0 md:m-0 md:ml-5 md:self-center">
            <AwardIcons />
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="features"
      classNames="py-32 bg-cloud2 bg-no-repeat bg-center bg-cover"
      primarySlot={
        <div className="lg:pr-16 xl:pr-38">
          <h3 className="text-3xl font-semibold leading-tight">Stackable Steamers</h3>
          <p className="mt-3 text-xl leading-relaxed">
            Layers of flavorful Dim Sum to devour.
          </p>
        </div>
      }
      secondarySlot={<img src={SteamersImage} alt="Stackable Steamers" />}
    />
    <SplitSection
      classNames={'test'}
      reverseOrder
      primarySlot={
        <div className="lg:pl-16 xl:pl-38">
          <h3 className="text-3xl font-semibold leading-tight">
            Irresistible Dim Sum
          </h3>
          <p className="mt-3 text-xl leading-relaxed">
            With every pieces to drool over.
          </p>
        </div>
      }
      secondarySlot={<img src={DimSumImage} alt="Irresistible Dim Sum" />}
    />
    <SplitSection
      classNames={'bg-cloud bg-no-repeat bg-center bg-cover'}
      primarySlot={
        <div className="lg:pr-16 xl:pr-38">
          <h3 className="text-3xl font-semibold leading-tight">
            Rondel Turntable
          </h3>
          <p className="mt-3 text-xl leading-relaxed">
            Rotate to compete for different edible opportunities.
          </p>
        </div>
      }
      secondarySlot={<img src={TurntableImage} alt="Rondel Turntable" />}
    />
    <SplitSection
      classNames={'test'}
      reverseOrder
      primarySlot={
        <div className="lg:pl-16 xl:pl-38">
          <h3 className="text-3xl font-semibold leading-tight">
            12 Adorable Animal Characters
          </h3>
          <p className="mt-3 text-xl leading-relaxed">
            Each with unique powers to choose from.
          </p>
        </div>
      }
      secondarySlot={<img src={CharacterImage} alt="12 Adorable Animal Characters" />}
    />
    <SplitSection
      classNames={'bg-cloud2 bg-no-repeat bg-center bg-cover'}
      primarySlot={
        <div className="lg:pr-16 xl:pr-38">
          <h3 className="text-3xl font-semibold leading-tight">
            Culturally Authentic Design
          </h3>
          <p className="mt-3 text-xl leading-relaxed">
            Designed by creators with direct cultural experiences.
          </p>
        </div>
      }
      secondarySlot={<img src={DesignersImage} alt="Culturally Authentic Design" />}
    />
    <section id="play" className="container mx-auto text-center pt-20">
      <h3 className="text-2xl font-semibold mt-10">Play Steam Up on Tabletop Simulator</h3>
      <p className="mt-2 mb-10">How was your feast? <a className="text-red-700 hover:text-black underline" href="https://tinyurl.com/steamupfeedback" target="_blank" rel="noopener noreferrer">We want to hear from you!</a></p>
      <a className="button border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-5 py-3 uppercase font-bold rounded" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2290121603" target="_blank" rel="noopener noreferrer">
        View Details
      </a>
    </section>
    <section id="contact" className="container mx-auto pt-48 sm:pt-56 xl:pt-64 pb-20 text-white text-center bg-mountains2 bg-no-repeat bg-200% md:bg-150% bg-top lg:bg-contain">
      <div className="bg-feature-img bg-cover rounded-lg m-5 px-10 py-16">
        <div className="w-3/4 max-w-md m-auto mb-4">
          <div className="pl-5">
            <SteamupWhiteLogo />
          </div>
        </div>
        <h3 className="text-2xl font-semibold">You're invited. Become a VIP!</h3>
        <div className="mx-auto max-w-screen-sm">
          <SubscribeBox textAlign="text-center" />
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
