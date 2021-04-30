import { FC } from 'react';
import { Layout } from '~/components';
// import { BuiltForResults } from './BuiltForResults';
// import { DesignedForHumans } from './DesignedForHumans';
// import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
// import { HomeHero } from './HomeHero';
import { PageHero } from '~/components/shared';

const imgSource = [
  { desktop: '/shared/approach-hero-xlarge.jpg' },
  { xl: '/shared/approach-hero-large.jpg' },
  { tablet: '/shared/approach-hero-medium.jpg' },
  { xs: '/shared/approach-hero-small.jpg' },
];

export const HomePage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at computer"
        imgSource={imgSource}
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
