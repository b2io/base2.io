import { css } from '@emotion/react';
import type { FC } from 'react';
import React from 'react';

import {
  BlogCard,
  Card,
  CardGrid,
  Heading,
  Layout,
  ResultCard,
  Text,
} from '~/components';
import { atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';

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
        <BlogCard
          heading="Starting a new job"
          href="/"
          linkText="Continue reading"
          text="This is some text for a blog card."
        />
        <Card>
          <Heading as="h3" color="coral" variant="h3">
            This is a heading
          </Heading>
          <Text
            as="p"
            css={css`
              margin: 0;
            `}
          >
            This is some text for the card content
          </Text>
        </Card>
        <BlogCard
          heading="Getting Started"
          href="/"
          linkText="Read more"
          text="This is some text for a blog card"
        />

        <ResultCard
          heading="Millions of users worldwide"
          text="This is some text for the Result Card content."
        />
      </CardGrid>
    </Layout>
  );
};
