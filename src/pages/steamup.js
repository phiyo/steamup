import React from 'react';
import Layout from '../components/layout/LayoutNoNav';

const SteamUp = () => (
  <Layout>
    <section className="text-center px-8 py-20">
      <h1 className="text-3xl font-bold">Please wait to be seated...</h1>
      <p className="text-xl mt-2 mb-10">You are about to enter Steam Up! A Dim Sum feast awaits you.</p>
      <a className="inline-block button bg-primary-yellow hover:bg-primary-yellowdarker text-primary-black hover:text-primary-black py-2 px-6 cursor-pointer uppercase text-lg font-bold rounded" href="https://hot-banana-games.pledgemanager.com/projects/steam-up/participate/?ref=websiteforward" target="_blank">Late Pledge Available Now</a>
    </section>
  </Layout>
);

export default SteamUp;
