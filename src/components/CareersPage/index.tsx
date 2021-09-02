import { FC } from 'react';

import { Layout } from '~/components';

import { PageHero } from '../PageHero';

export const CareersPage: FC = () => {
  return (
    <Layout
      description="Interested in a career at Base Two? Check out some of the open positions ae are hiring for. If you don't see any current openings, please reach out through our Contact page."
      title="Careers"
    >
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
