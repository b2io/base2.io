import { FC } from 'react';

import { Layout } from '~/components';

import { PageHero } from '../PageHero';

export const CareersPage: FC = () => {
  return (
    <Layout
      description="Solving seemingly impervious challenges."
      title="Careers"
    >
      <PageHero
        alt="person sitting at computer and smiling"
        src={'/careers/careers-hero-xlarge.jpg'}
        imageProps={{ height: 546, width: 1280 }}
        text="Solving seemingly impervious challenges."
      />
    </Layout>
  );
};
