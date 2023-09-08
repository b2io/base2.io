import { css } from '@emotion/react';
import type { FC } from 'react';

import { atMinTablet, spacing } from '~/theme';

import { OurCulture } from './OurCulture';
import { OurTeam } from './OurTeam';
import { Layout } from '../Layout';
import { PageHero } from '../PageHero';

export const CulturePage: FC = () => {
  return (
    <Layout
      description="We are engineers and artisans, collaborat­ing to make custom software people love."
      title="Culture"
    >
      <PageHero
        alt="members of team standing in front of a comically large shoe"
        imgSources={[
          ['largeDesktop', '/culture/culture-hero-xlarge.jpg'],
          ['tablet', '/culture/culture-hero-medium.jpg'],
          ['xl', '/culture/culture-hero-large.jpg'],
          ['xs', '/culture/culture-hero-small.jpg'],
        ]}
        text="We are engineers and artisans, collaborat&shy;ing to make custom software people love."
      />
      <OurCulture
        css={css`
          margin-top: ${spacing.xxl2};

          ${atMinTablet} {
            margin-top: ${spacing.xxl3};
          }
        `}
      />
      <OurTeam
        css={css`
          margin-top: ${spacing.xxl2};

          ${atMinTablet} {
            margin-top: ${spacing.xxl3};
          }
        `}
      />
    </Layout>
  );
};
