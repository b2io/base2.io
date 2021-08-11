import type { FC } from 'react';

import { Layout } from '~/components';

import { PageHero } from '../PageHero';

export const ContactPage: FC = () => {
  return (
    <Layout description="Like what you see? Let's get started." title="Contact">
      <PageHero
        alt="coworkers collaborating in office"
        imgSources={[
          ['largeDesktop', '/contact/contact-hero-xlarge.jpg'],
          ['tablet', '/contact/contact-hero-medium.jpg'],
          ['xl', '/contact/contact-hero-large.jpg'],
          ['xs', '/contact/contact-hero-small.jpg'],
        ]}
        text="Like what you see? Let's get started."
      />
    </Layout>
  );
};
