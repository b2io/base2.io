import type { FC } from 'react';

import { Layout } from '~/components';

import { FeaturedCaseStudyHero } from './FeaturedCaseStudyHero';

export const WorkPage: FC = () => {
  return (
    <Layout
      description="Unique challenges 
    require unique solutions."
      title="Work"
    >
      <FeaturedCaseStudyHero />
    </Layout>
  );
};
