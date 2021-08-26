import type { FC } from 'react';

import { Layout } from '~/components';

import { FeaturedCaseStudyHero } from './FeaturedCaseStudyHero';

export const WorkPage: FC = () => {
  // TODO: Add description for WorkPage.
  return (
    <Layout description="" title="Work">
      <FeaturedCaseStudyHero />
    </Layout>
  );
};
