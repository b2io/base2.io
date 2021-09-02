import type { FC } from 'react';

import { Layout } from '~/components';

import { FeaturedCaseStudyHero } from './FeaturedCaseStudyHero';

export const WorkPage: FC = () => {
  return (
    <Layout
      description="Unique challenges 
    require unique solutions. Check out some of our work samples to see how we approach these challenges."
      title="Work"
    >
      <FeaturedCaseStudyHero />
    </Layout>
  );
};
