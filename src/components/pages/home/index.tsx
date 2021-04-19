import { FC } from 'react';

import { Layout } from '~/components';
import DesignedForHumans from './DesignedForHumans';
import HomeHero from './HomeHero';

const Home: FC = () => {
  return (
    <Layout>
      <HomeHero />
      <DesignedForHumans />
    </Layout>
  );
};

export default Home;
