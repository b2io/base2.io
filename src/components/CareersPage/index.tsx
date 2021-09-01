import { FC } from 'react';

import { Layout } from '~/components';

import { PageHero } from '../PageHero';

export const CareersPage: FC = () => {
  // TODO: Add description for CareersPage.
  return (
    <Layout description="Working at Base Two" title="Careers">
      <PageHero
        alt="person sitting at computer and smiling"
        imgSources={[
          ['largeDesktop', '/careers/careers-hero-xlarge.jpg'],
          ['tablet', '/careers/careers-hero-medium.jpg'],
          ['xl', '/careers/careers-hero-large.jpg'],
          ['xs', '/careers/careers-hero-small.jpg'],
        ]}
        text="Solving seemingly impervious challenges."
      />
    </Layout>
  );
};
