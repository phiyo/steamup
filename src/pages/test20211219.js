import React from 'react';
import Layout from '../components/layout/LayoutNoNav';
import SubscribeBoxTest from '../components/SubscribeTest';

const TestingPage = () => (
  <Layout>
    <section className="text-center px-8 py-20">
      <SubscribeBoxTest textAlign="text-center" />
    </section>
  </Layout>
);

export default TestingPage;
