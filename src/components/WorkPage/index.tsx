import type { FC } from 'react';

import { Layout } from '~/components';

import { CaseStudyHeroImage } from '../CaseStudyHeroImage';

export const WorkPage: FC = () => {
  return (
    <Layout title="Work">
      <CaseStudyHeroImage
        alt="abstract collection of products"
        src="/work/work-featured-hero.jpg"
      />
    </Layout>
  );
};
