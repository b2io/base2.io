import type { FC } from 'react';

import { Layout } from '~/components';

import { CaseStudyHeroImage } from '../CaseStudyHeroImage';

export const WorkPage: FC = () => {
  return (
    <Layout title="Work">
      <CaseStudyHeroImage
        alt="abstract collection of product screens"
        src="/work/work-featured-hero.jpg"
      />
    </Layout>
  );
};
