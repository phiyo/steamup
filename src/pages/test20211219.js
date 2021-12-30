import React from 'react';
import Layout from '../components/layout/LayoutNoNav';
import SubscribeBox from '../components/Subscribe';

const TestingPage = () => (
  <Layout>
    <section className="text-center px-8 py-20">
      <SubscribeBox textAlign="text-center" />
    </section>
  </Layout>
);

export default TestingPage;
