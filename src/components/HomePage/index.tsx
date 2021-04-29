import { FC } from 'react';
import { Layout } from '~/components';

// import { BuiltForResults } from './BuiltForResults';
// import { DesignedForHumans } from './DesignedForHumans';
// import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
// import { HomeHero } from './HomeHero';

import { PageHero } from '~/components/shared';

const data = [
  {
    index: 1,
    media: '(min-width: 1920px)',
    srcSet: '/shared/approach-hero-1920.jpg',
  },
  {
    index: 2,
    media: '(min-width: 1600px)',
    srcSet: '/shared/approach-hero-1600.jpg',
  },
  {
    index: 3,
    media: '(min-width: 768px)',
    srcSet: '/shared/approach-hero-768.jpg',
  },
  {
    index: 4,
    media: '(min-width: 0px)',
    srcSet: '/shared/approach-hero-375.jpg',
  },
];

export const HomePage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at computer"
        data={data}
        text="People motivate what we do and how we do it"
      />
      {/* <HomeHero />
      <DesignedForHumans />
      <BuiltForResults />
      <FeaturedCaseStudy /> */}
      <FueledByCuriosity />
    </Layout>
  );
};
