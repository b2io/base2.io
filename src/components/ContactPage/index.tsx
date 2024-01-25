import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout, Text } from '~/components';
import { atMinTablet, cssClamp } from '~/theme';

import { Contact } from './ContactForm';
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
      <Text
        as="article"
        css={css`
          margin-bottom: ${cssClamp([6.5, 'mobile'], [8.5, 'tablet'])};
          margin-top: ${cssClamp([6.75, 'mobile'], [6.5, 'tablet'])};
          position: relative;

          ${atMinTablet} {
            max-width: 52rem;
          }
        `}
        variant="h2"
      >
        Our team members are located in Columbus, Pittsburgh, Seattle,
        Philadelphia, Atlanta, New York City, and Orlando, but thanks to
        satellites and the internet, we can work with you wherever you are.
      </Text>
      <Contact />
    </Layout>
  );
};
