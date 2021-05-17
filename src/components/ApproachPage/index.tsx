import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Layout, PageHero, QuotedImage } from '~/components';
import { atMinTablet, cssClamp, spacing } from '~/theme';

import { HowWeBuild } from './HowWeBuild';
import { HowWeEngage } from './HowWeEngage';

export const ApproachPage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at a computer"
        src={{
          largeDesktop: '/approach/approach-hero-xlarge.jpg',
          tablet: '/approach/approach-hero-medium.jpg',
          xl: '/approach/approach-hero-large.jpg',
          xs: '/approach/approach-hero-small.jpg',
        }}
        text="People motivate what we do and how we do it."
        css={css`
          margin-bottom: ${spacing.xxl2};

          ${atMinTablet} {
            margin-bottom: ${spacing.xxl3};
          }
        `}
      />
      <HowWeEngage
        css={css`
          margin-bottom: 7.375rem;

          ${atMinTablet} {
            margin-bottom: 0.25rem;
          }
        `}
      />
      <HowWeBuild
        css={css`
          margin-bottom: ${cssClamp([12.5, 'mobile'], [17.313, 'desktop'])};
        `}
      />
      <QuotedImage
        alt="person standing by brick wall"
        company="Base Two"
        src={{
          tablet: '/approach/approach-quote_medium.jpg',
          xl: '/approach/approach-quote_large.jpg',
          xs: '/approach/approach-quote_small.jpg',
        }}
        name="Tony Borres"
        position="Director of Operations"
        quote="We follow agile, an iterative approach to software development that lets us quickly pivot when challenges arise. "
      />
    </Layout>
  );
};
