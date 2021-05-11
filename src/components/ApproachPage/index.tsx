import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Layout, PageHero, QuotedImage } from '~/components';
import { atMinTablet } from '~/theme';
import { spacing } from '~/theme/spacing';
import { HowWeEngage } from './HowWeEngage';

const heroImageSource = {
  largeDesktop: '/approach/approach-hero-xlarge.jpg',
  tablet: '/approach/approach-hero-medium.jpg',
  xl: '/approach/approach-hero-large.jpg',
  xs: '/approach/approach-hero-small.jpg',
};

const quotedImageSource = {
  tablet: '/quoted-image/approach-quote_medium.jpg',
  xl: '/quoted-image/approach-quote_large.jpg',
  xs: '/quoted-image/approach-quote_small.jpg',
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
      <QuotedImage
        alt="person standing by brick wall"
        company="Base Two"
        imgSource={quotedImageSource}
        name="Tony Borres"
        position="Director of Operations"
        quote="We follow agile, an iterative approach to software development that lets us quickly pivot when challenges arise. "
      />
    </Layout>
  );
};
