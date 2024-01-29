import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout, Text } from '~/components';
import { atMinTablet, cssClamp } from '~/theme';

import { Contact } from './ContactForm';
import { Referrals } from './Referrals';
import { PageHero } from '../Common/PageHero';

export const ContactPage: FC = () => {
  return (
    <Layout description="Like what you see? Let's get started." title="Contact">
      <PageHero
        alt="group of people walking toward you"
        src={'/contact/contact-hero-xl.jpg'}
        imageProps={{ height: 614, width: 1260 }}
        text="Like what you see? Let's get started."
      />
      <section
        css={css`
          margin-bottom: ${cssClamp([6.5, 'mobile'], [10, 'tablet'])};
          margin-top: ${cssClamp([6.75, 'mobile'], [6.5, 'tablet'])};
          ${atMinTablet} {
            max-width: 52rem;
          }
        `}
      >
        <Text as="article" variant="h2">
          Our team members are located in Columbus, Pittsburgh, Seattle,
          Philadelphia, Atlanta, New York City, and Orlando, but thanks to
          satellites and the internet, we can work with you wherever you are.
        </Text>
        <Referrals />
      </section>
      <Contact />
    </Layout>
  );
};
