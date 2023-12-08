import { css } from '@emotion/react';
import Image from 'next/image';
import React, { FC } from 'react';

import { Layout, PageHero, QuotedImage } from '~/components';
import { atMinTablet, cssClamp, spacing } from '~/theme';

import { HowWeBuild } from './HowWeBuild';
import { HowWeEngage } from './HowWeEngage';

export const ApproachPage: FC = () => {
  return (
    <Layout
      description="People motivate what we do and how we do it."
      title="Approach"
    >
      <PageHero
        alt="people standing outside in front of foliage"
        imgSources={[
          ['largeDesktop', '/approach/approach-hero-xlarge.jpg'],
          ['tablet', '/approach/approach-hero-medium.jpg'],
          ['xl', '/approach/approach-hero-large.jpg'],
          ['xs', '/approach/approach-hero-small.jpg'],
        ]}
        text="People motivate what we do and how we do it."
      />
      <HowWeEngage
        css={css`
          margin-top: ${spacing.xxl2};

          ${atMinTablet} {
            margin-top: ${spacing.xxl3};
          }
        `}
      />
      <HowWeBuild
        css={css`
          margin-top: 7.375rem;

          ${atMinTablet} {
            margin-top: 0.25rem;
          }
        `}
      />
      <QuotedImage
        alt="person standing by brick wall"
        company="Base Two"
        css={css`
          margin-top: ${cssClamp([12.5, 'mobile'], [17.313, 'desktop'])};
        `}
        imgSources={[
          ['tablet', '/approach/approach-quote_medium.jpg'],
          ['xl', '/approach/approach-quote_large.jpg'],
          ['xs', '/approach/approach-quote_small.jpg'],
        ]}
        name="Tony Borres"
        position="Director of Operations"
        quote="We follow agile, an iterative approach to software development that lets us quickly pivot when challenges arise."
      />

      {/* <div
        id="bannerContainer"
        css={css`
          position: relative;
          display: block;
          text-align: center;
          overflow: hidden;
        `}
      >
        <Image
          css={css``}
          alt={'hello world'}
          src={`/approach/approach-quote_medium.jpg`}
          layout="intrinsic"
          height={1600}
          width={1218}
        />
      </div> */}
    </Layout>
  );
};
