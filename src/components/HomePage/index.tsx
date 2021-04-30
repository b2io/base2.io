import { FC } from 'react';
import { Layout } from '~/components';
// import { BuiltForResults } from './BuiltForResults';
// import { DesignedForHumans } from './DesignedForHumans';
// import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
// import { HomeHero } from './HomeHero';
import { PageHero } from '~/components/shared';

// import { bp } from '~/theme/breakpoints';

const heroImageData = [
  {
    // media: `(min-width: ${bp.desktop}px)`,
    srcSet: '/shared/approach-hero-xlarge.jpg',
  },
  {
    // media: `(min-width: ${bp.xl}px)`,
    srcSet: '/shared/approach-hero-large.jpg',
  },
  {
    // media: `(min-width: ${bp.tablet}px)`,
    srcSet: '/shared/approach-hero-medium.jpg',
  },
  {
    // media: `(min-width: ${bp.xs}px)`,
    srcSet: '/shared/approach-hero-small.jpg',
  },
];

export const HomePage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at computer"
        data={heroImageData}
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
