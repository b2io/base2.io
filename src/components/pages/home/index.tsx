import { FC } from 'react';

import { Layout } from '~/components';
import HomeHero from './HomeHero';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import DesignedForHumans from './DesignedForHumans';
import BuiltForResults from './BuiltForResults';

const Home: FC = () => {
  return (
    <Layout>
      <HomeHero />
      <DesignedForHumans />
      <BuiltForResults />
      <FeaturedCaseStudy />
    </Layout>
  );
};

export default Home;
