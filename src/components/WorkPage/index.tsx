import type { FC } from 'react';

import { Layout } from '~/components';

import { FeaturedCaseStudyHero } from '../FeaturedCaseStudyHero';

export const WorkPage: FC = () => {
  return (
    <Layout title="Work">
      <FeaturedCaseStudyHero
        alt="abstract collection of product screens"
        src="/work/work-featured-hero.jpg"
      />
    </Layout>
  );
};
