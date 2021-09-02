import { css } from '@emotion/react';
import type { FC } from 'react';
import React from 'react';

import { Layout } from '~/components';
import { atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';

import { TechCard, TechListGrid } from '../WorkPage/TechList';
import { BuiltForResults } from './BuiltForResults';
import { DesignedForHumans } from './DesignedForHumans';
import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
import { HomeHero } from './HomeHero';

export type HomePageProps = Record<string, unknown>;

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Layout
      description="Software that moves people. At Base Two, it all starts with a human touch."
      title="Base Two"
    >
      <HomeHero />

      <DesignedForHumans
        css={css`
          margin-top: ${cssClamp([10.5, 'mobile'], [1.5, 'desktop'])};
        `}
      />
      <TechListGrid
        css={css`
          margin-top: ${cssClamp([10.5, 'mobile'], [16.5, 'desktop'])};
        `}
      >
        <TechCard logo="angular" />
        <TechCard logo="redux" />
        <TechCard logo="react" />
        <TechCard logo="sass" />
        <TechCard logo="net" />
        <TechCard logo="jasmine" />
        <TechCard logo="karma" />
      </TechListGrid>
      <BuiltForResults
        css={css`
          margin-top: ${cssClamp([12.5, 'mobile'], [16.5, 'desktop'])};
        `}
      />
      <FeaturedCaseStudy
        css={css`
          margin-top: ${cssClamp([12.5, 'mobile'], [17.5, 'tablet'])};

          ${atMinXL} {
            margin-top: ${spacing.xxl};
          }
        `}
      />
      <FueledByCuriosity
        css={css`
          margin-top: ${spacing.xxl5};

          ${atMinTablet} {
            margin-top: -${spacing.xxl2};
          }

          ${atMinXL} {
            margin-top: ${spacing.xxl};
          }
        `}
      />
    </Layout>
  );
};
