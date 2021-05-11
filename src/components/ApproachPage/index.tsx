import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Layout, PageHero } from '~/components';
import { atMinTablet } from '~/theme';
import { spacing } from '~/theme/spacing';
import { HowWeEngage } from './HowWeEngage';
import { HowWeBuild } from './HowWeBuild';

const heroImageSource = {
  largeDesktop: '/approach/approach-hero-xlarge.jpg',
  tablet: '/approach/approach-hero-medium.jpg',
  xl: '/approach/approach-hero-large.jpg',
  xs: '/approach/approach-hero-small.jpg',
};

export const ApproachPage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at a computer"
        imgSource={heroImageSource}
        text="People motivate what we do and how we do it."
        css={css`
          margin-bottom: ${spacing.xxl2};

          ${atMinTablet} {
            margin-bottom: ${spacing.xxl3};
          }
        `}
      />
      <HowWeEngage />
      <HowWeBuild />
    </Layout>
  );
};
