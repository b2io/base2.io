import { FC } from 'react';
import { Layout } from '~/components';

import { BuiltForResults } from './BuiltForResults';
import { DesignedForHumans } from './DesignedForHumans';
import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
import { HomeHero } from './HomeHero';

export const HomePage: FC = () => {
  return (
    <Layout>
      <HomeHero />
      <DesignedForHumans />
      <BuiltForResults />
      <FeaturedCaseStudy />
      <FueledByCuriosity />
    </Layout>
  );
};
