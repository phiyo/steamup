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
      <meta property="og:title" content="Steam Up: A Feast of Dim Sum - Now Live on Kickstarter" />
      <meta property="og:description" content="A competitive medium-light weight Dim Sum collection tabletop game offering an authentic cultural experience." />
      <meta name="twitter:title" content="Steam Up: A Feast of Dim Sum - Now Live on Kickstarter" />
      <meta name="twitter:description" content="A competitive medium-light weight Dim Sum collection tabletop game offering an authentic cultural experience." />
    </Helmet>
    <section id="top" className="py-20 bg-feature-img bg-cover bg-no-repeat bg-center text-white">
      <div className="container mx-auto px-8 md:flex">
        <div className="m-auto w-full sm:w-5/6 md:w-1/2 pl-10 sm:pl-0 md:pr-10">
          <img className="hidden" src={OGImage} alt="Steam Up" />
          <a href="https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum?ref=bp0vx1" target="_blank"><img src={FeatureImage} alt="Steam Up: A Feast of Dim Sum" /></a>
        </div>

        <div className="text-center sm:w-full md:text-left md:w-1/2 xl:w-2/3 pt-4 sm:pt-4 md:pt-6 xl:pt-8">
          <h1 className="text-2xl md:text-xl lg:text-2xl font-bold leading-9">
            Thank You For Your Support on
            <a href="https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum?ref=bp0vx1" target="_blank"><span className="w-11/12 mt-4 sm:w-275 xl:w-350 inline-block align-bottom"><KickstarterLogo /></span></a>
          </h1>
          <p className="text-xl lg:text-2xl pt-4 mt-8 border-t border-gray-600">
            <strong className="block">Missed the campaign? No worries.</strong>
            {/*
            <a className="inline-block button bg-primary-yellow hover:bg-primary-yellowdarker hover:text-primary-black py-4 px-6 cursor-pointer uppercase text-lg font-bold rounded" href="https://hot-banana-games.pledgemanager.com/projects/steam-up/participate/?ref=website" target="_blank">Late Pledge Now</a>
            */}
          </p>
          <p className="text-xl lg:text-xl mt-2 mb-2">
            Become a VIP to follow along with the latest news.
          </p>
          <SubscribeBox textAlign="text-center sm:text-left" />
        </div>
      </div>
    </section>
    {/*
    <section className="p-10 lg:pb-0 text-center lg:text-left border-b border-gray-400 lg:border-0 lg:mx-auto lg:max-w-4xl">
      <div className="block lg:inline-block mb-5 lg:mb-0">
        <span className="w-2/3 sm:w-275 inline-block align-middle"><KickstarterLogo /></span> <span className="font-bold inline-block mx-2 text-2xl uppercase align-middle">October 19th</span>
      </div>
      <a className="lg:float-right lg:-mt-1 inline-block button bg-primary-yellow hover:bg-primary-yellowdarker text-primary-black hover:text-primary-black py-2 px-6 cursor-pointer uppercase text-lg font-bold rounded" href="https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum?ref=bp0vx1" target="_blank">Notify on Launch</a>
    </section>
    */}
    <section id="overview" className="pt-12 sm:pt-20 text-center md:text-left bg-cloud bg-no-repeat bg-cover">
      <div className="container mx-auto">
        <div className="w-3/4 max-w-md m-auto mb-4">
          <div className="pl-5">
            <a href="https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum?ref=bp0vx1" target="_blank"><SteamupLogo /></a>
          </div>
        </div>
        <h1 className="text-2xl lg:text-3xl mt-4 mb-4 font-bold text-center">
          Supported By 8260+ Backers, $580k Raised, 18 Stretch Goals Unlocked
        </h1>
        {/*
        <p className="text-2xl mb-4 text-center">
          <a className="inline-block button bg-primary-yellow hover:bg-primary-yellowdarker hover:text-primary-black py-4 px-6 cursor-pointer uppercase text-lg font-bold rounded" href="https://hot-banana-games.pledgemanager.com/projects/steam-up/participate/?ref=website" target="_blank">Late Pledge Now</a>
        </p>
        */}
        <p className="text-2xl mb-8 text-center">
          <a className="inline-block px-6 cursor-pointer text-lg font-bold underline text-red-700" href="https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum?ref=bp0vx1" target="_blank">Recap what happened on Kickstarter</a>
        </p>
      </div>
      <div className="container mx-auto">
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
          <div className="p-5 w-full sm:max-w-screen-sm sm:m-auto md:flex-auto md:m-0 md:ml-5 md:self-center">
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
    <section id="contact" className="container mx-auto pt-48 sm:pt-56 xl:pt-64 text-white text-center bg-mountains2 bg-no-repeat bg-200% md:bg-150% bg-top lg:bg-contain">
      <div className="bg-feature-img bg-cover rounded-lg m-5 px-10 py-16">
        <div className="w-3/4 max-w-md m-auto mb-4">
          <div className="pl-5">
            <a href="https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum?ref=bp0vx1" target="_blank"><SteamupWhiteLogo /></a>
          </div>
        </div>
        <h2 className="text-3xl md:text-4x leading-9 pb-6">
          <p className="text-lg">Thank you for your support on</p>
          <a className="text-white hover:text-white" href="https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum?ref=bp0vx1" target="_blank"><span className="w-11/12 sm:w-275 xl:w-300 inline-block align-bottom"><KickstarterLogo /></span></a>
        </h2>
        <p className="text-xl mb-4"><strong>Missed the campaign? No worries.</strong></p>
        {/*
        <a className="inline-block button bg-primary-yellow hover:bg-primary-yellowdarker hover:text-primary-black py-4 px-6 cursor-pointer uppercase text-lg font-bold rounded" href="https://hot-banana-games.pledgemanager.com/projects/steam-up/participate/?ref=website" target="_blank">Late Pledge Now</a>
        */}
        <h3 className="text-lg font-semibold mt-6">Become a VIP to follow along the latest news!</h3>
        <div className="mx-auto max-w-screen-sm">
          <SubscribeBox textAlign="text-center" />
        </div>
      </div>
    </section>
    {/*
    <section className="p-10 text-center lg:text-left border-b border-gray-400">
      <div className="lg:mx-auto lg:max-w-4xl">
        <div className="block lg:inline-block mb-5 lg:mb-0">
          <span className="w-2/3 sm:w-275 inline-block align-middle"><KickstarterLogo /></span> <span className="font-bold inline-block mx-2 text-2xl uppercase align-middle">October 19th</span>
        </div>
        <a className="lg:float-right lg:-mt-1 inline-block button bg-primary-yellow hover:bg-primary-yellowdarker text-primary-black hover:text-primary-black py-2 px-6 cursor-pointer uppercase text-lg font-bold rounded" href="https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum?ref=bp0vx1" target="_blank">Notify on Launch</a>
      </div>
    </section>
    */}
  </Layout>
);

export default Index;
