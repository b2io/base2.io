import { css } from '@emotion/react';
import type { FC } from 'react';

import { atMinTablet, spacing } from '~/theme';

import { OurCulture } from './OurCulture';
import { OurTeam } from './OurTeam';
import { PageHero } from '../Common/PageHero';
import { Layout } from '../Layouts/Layout';

export const CulturePage: FC = () => {
  return (
    <Layout
      description="We are engineers and artisans, collaborat­ing to make custom software people love."
      title="Culture"
    >
      <PageHero
        alt="members of team standing in front of a comically large shoe"
        src={`/culture/culture-hero-xlarge.jpg`}
        imageProps={{ height: 546, width: 1280 }}
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
