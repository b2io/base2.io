import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout, Text } from '~/components';
import { atMinTablet, cssClamp } from '~/theme';

import { PageHero } from '../PageHero';
import { Contact } from './ContactForm';

export const ContactPage: FC = () => {
  return (
    <Layout description="Like what you see? Let's get started." title="Contact">
      <PageHero
        alt="lighting fixture mounted on a brick wall"
        imgSources={[
          ['largeDesktop', '/contact/contact-hero-xlarge.jpg'],
          ['tablet', '/contact/contact-hero-medium.jpg'],
          ['xl', '/contact/contact-hero-large.jpg'],
          ['xs', '/contact/contact-hero-small.jpg'],
        ]}
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
        Our office is based in Columbus, OH. Our team members are located in
        Pittsburgh, Philadelphia, Atlanta, New York City, and Miami, but thanks
        to satellites and the internet, we can work with you wherever you are.
      </Text>
      <Contact />
    </Layout>
  );
};
