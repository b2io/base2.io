import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout, Text } from '~/components';
import { atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';

import { Contact } from './ContactForm';
import { PageHero } from '../Common/PageHero';

export const ContactPage: FC = () => {
  return (
    <Layout description="Like what you see? Let's get started." title="Contact">
      <PageHero
        alt="people standing in field looking at camera"
        src={'/contact/contact-hero-xl.jpg'}
        imageProps={{ height: 546, width: 1280 }}
        text="Like what you see? Let's get started."
      />
      <section
        css={css`
          margin-top: ${cssClamp([6.5, 'mobile'], [8.5, 'tablet'])};

          ${atMinXL} {
            margin-left: ${spacing.marginXl};
            margin-right: ${spacing.marginXl};
          }
        `}
      >
        <Text
          as="article"
          css={css`
            margin-bottom: ${cssClamp([6.5, 'mobile'], [10, 'tablet'])};
            position: relative;

            ${atMinTablet} {
              max-width: 52rem;
            }
          `}
          variant="h2"
        >
          Our team members are located in Columbus, Pittsburgh, Seattle,
          Philadelphia, Atlanta, and NYC, but thanks to satellites and the
          internet, we can work with you wherever you are.
        </Text>
        <Contact />
      </section>
    </Layout>
  );
};
