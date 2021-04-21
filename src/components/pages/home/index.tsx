import { FC } from 'react';

import { Layout } from '~/components';
import DesignedForHumans from './DesignedForHumans';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import HomeHero from './HomeHero';

const Home: FC = () => {
  return (
    <Layout>
      <HomeHero />
      <DesignedForHumans />
      <FeaturedCaseStudy />
    </Layout>
  );
};

export default Home;
