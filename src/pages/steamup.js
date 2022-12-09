import React from 'react';
import Layout from '../components/layout/LayoutNoNav';
import LatePledgeImage from '../assets/og-image/latepledge.jpg';

const SteamUp = () => (
  <Layout>
    <section className="text-center px-8 py-20">
      {/*
      <img className="hidden" src={LatePledgeImage} alt="Steam Up" />
      */}
      <h1 className="text-3xl font-bold">We are preparing for Steam Up's officially opening!</h1>
      <p className="text-xl mt-2 mb-10">Meanwhile, check the Kickstarter page for the latest updates.</p>
      <a className="inline-block button bg-primary-yellow hover:bg-primary-yellowdarker text-primary-black hover:text-primary-black py-2 px-6 cursor-pointer uppercase text-lg font-bold rounded" href="https://www.kickstarter.com/projects/steam-up/steam-up-a-feast-of-dim-sum/posts" target="_blank">View Latest Kickstarter Updates</a>
    </section>
  </Layout>
);

export default SteamUp;
