import { css } from '@emotion/react';
import type { FC } from 'react';
import React from 'react';

import { Card, CardGrid, Layout, Link } from '~/components';
import { atMinTablet, atMinXL, colors, cssClamp, spacing } from '~/theme';

import { BuiltForResults } from './BuiltForResults';
import { DesignedForHumans } from './DesignedForHumans';
import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
import { HomeHero } from './HomeHero';

export type HomePageProps = Record<string, unknown>;

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Layout
      css={css`
        margin-top: 0;
      `}
      description="Software that moves people. At Base Two, it all starts with a human touch."
      title="Base Two"
    >
      <HomeHero />
      <DesignedForHumans
        css={css`
          margin-top: ${cssClamp([10.5, 'mobile'], [1.5, 'desktop'])};
        `}
      />
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
      <CardGrid>
        <Card
          css={css`
            &:before {
              background-color: ${colors.lightBlue};
              content: '';
              display: block;
              height: 0.25rem;
              margin-bottom: 1rem;
              width: 2.5rem;
            }
          `}
          largeHeading="Millions"
          heading="of users worldwide"
          text="This is some text check me out. This is some text check me out. This is some text check me out. "
        ></Card>
        <Card
          icon="business"
          subheading="Business"
          text="This is some text check me out. This is some text check me out. This is some text check me out. This is some text check me out. "
        />
        <Card
          heading="The solution"
          text="This is some text check me out. This is some text check me out. This is some text check me out. This is some text check me out. "
        />
        <Card
          subheading="Joining a team — blog post"
          text="This is some text check me out. This is some text check me out. This is some text check me out. This is some text check me out. This is some text check me out. "
        >
          <Link
            css={css`
              font-size: 2rem;
            `}
            color="coral"
            href="#"
            variant="CTA"
          >
            Read more
          </Link>
        </Card>
      </CardGrid>
    </Layout>
  );
};
