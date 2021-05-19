import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout } from '../Layout';
import { PageHero } from '../PageHero';
import { AvailablePositions } from './AvailablePositions';
import { OurBlog } from './OurBlog';
import { OurCulture } from './OurCulture';
import { TeamCardList } from '../TeamCardList';
import { TeamHero } from '../TeamHero';
import { atMinDesktop, atMinTablet, spacing } from '~/theme';

export const CulturePage: FC = () => {
  return (
    <Layout title="Culture">
      <PageHero
        alt="people sitting around conference table collaborating"
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
      <TeamHero
        alt="person wearing hat smiling"
        css={css`
          margin-bottom: 5rem;
          margin-top: 7.375rem;

          ${atMinTablet} {
            margin-top: ${spacing.xxl3};
          }

          ${atMinDesktop} {
            margin-bottom: -4rem;
          }
        `}
        imgSources={[
          ['desktop', '/culture/team-hero/culture-ourteam-xlarge.jpg'],
          ['tablet', '/culture/team-hero/culture-ourteam-large.jpg'],
          ['xs', '/culture/team-hero/culture-ourteam-small.jpg'],
        ]}
        text="Our team"
      />
      <TeamCardList />
      <AvailablePositions
        css={css`
          margin-top: ${spacing.xxl4};
        `}
      />
      <OurBlog
        css={css`
          margin-top: ${spacing.xxl4};
        `}
      />
    </Layout>
  );
};
