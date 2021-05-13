import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout } from '../Layout';
import { PageHero } from '../PageHero';
import { AvailablePositions } from './AvailablePositions';
import { OurCulture } from './OurCulture';

export const CulturePage: FC = () => {
  return (
    <Layout title="Culture">
      <PageHero
        alt="people sitting around conference table collaborating"
        imgSource={{
          largeDesktop: '/culture/culture-hero-xlarge.jpg',
          tablet: '/culture/culture-hero-medium.jpg',
          xl: '/culture/culture-hero-large.jpg',
          xs: '/culture/culture-hero-small.jpg',
        }}
        text="We are engineers and artisans, collaborating to make custom software people love."
      />
      <OurCulture
        css={css`
          margin-top: 8.5rem;
        `}
      />
      <AvailablePositions
        css={css`
          margin-top: 12.5rem;
        `}
      />
    </Layout>
  );
};
