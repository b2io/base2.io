import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout, Text } from '~/components';
import { atMinTablet, cssClamp } from '~/theme';

import { PageHero } from '../PageHero';
import { Contact } from './ContactForm';

export const ContactPage: FC = () => {
  return (
    <Layout title="Contact">
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
      {/* Should this blurb be a component? Asking for a friend */}
      <article
        css={css`
          margin-bottom: ${cssClamp([6.5, 'mobile'], [8.5, 'tablet'])};
          margin-top: ${cssClamp([6.75, 'mobile'], [6.5, 'tablet'])};
          position: relative;

          ${atMinTablet} {
            max-width: 52rem;
          }
        `}
      >
        <Text variant="h2">
          Base Two is located in Columbus, OH, Pittsburgh, PA and Chicago, IL,
          but thanks to satellites and the internet, we can work with you
          wherever you are.
        </Text>
      </article>
      <Contact />
    </Layout>
  );
};
