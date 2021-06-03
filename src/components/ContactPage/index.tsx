// import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout, PageHero } from '~/components';
// import { atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';

// import { BuiltForResults } from '../HomePage/BuiltForResults';
// import { DesignedForHumans } from '../HomePage/DesignedForHumans';
// import { FeaturedCaseStudy } from '../HomePage/FeaturedCaseStudy';
// import { FueledByCuriosity } from '../HomePage/FueledByCuriosity';
// import { HomeHero } from '../HomePage/HomeHero';

export const ContactPage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at a computer"
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
