import { FC } from 'react';
import { Layout } from '~/components';

// import { BuiltForResults } from './BuiltForResults';
// import { DesignedForHumans } from './DesignedForHumans';
// import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
// import { HomeHero } from './HomeHero';

// import { PageHero } from '~/components/shared';

export const HomePage: FC = () => {
  return (
    <Layout>
      {/* <PageHero
        alt="person staring at computer"
        srcSet="/shared/approach-hero-375.jpeg"
        text="People motivate what we do and how we do it"
      /> */}
      <picture>
        <source
          media="(min-width: 1920px)"
          srcSet="/shared/approach-hero-1920.jpg"
        />
        <source
          media="(min-width: 1600px)"
          srcSet="/shared/approach-hero-1600.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/shared/approach-hero-768.jpg"
        />
        <img src="/shared/approach-hero-375.jpg" alt="Flowers" />
      </picture>
      {/* <HomeHero />
      <DesignedForHumans />
      <BuiltForResults />
      <FeaturedCaseStudy /> */}
      <FueledByCuriosity />
    </Layout>
  );
};
