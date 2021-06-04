import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout } from '~/components';
import { atMinXL } from '~/theme';

import { PageHero } from '../PageHero';

export const ContactPage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="coworkers collaborating in office"
        css={css`
          ${atMinXL} {
            h1 {
              max-width: 48rem;
            }
          }
        `}
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
