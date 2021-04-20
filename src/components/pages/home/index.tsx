import { FC } from 'react';

import { Layout } from '~/components';
import HomeHero from './HomeHero';
import DesignedForHumans from './DesignedForHumans';
import BuiltForResults from './BuiltForResults';

const Home: FC = () => {
  return (
    <Layout>
      <HomeHero />
      <DesignedForHumans />
      <BuiltForResults />
    </Layout>
  );
};

export default Home;
