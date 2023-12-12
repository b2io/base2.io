import { css } from '@emotion/react';
import { FC } from 'react';

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
        src={'/approach/approach-hero-xlarge.jpg'}
        imageProps={{ height: 546, width: 1280 }}
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
        name="Tony Borres"
        position="Director of Operations"
        quote="We follow agile, an iterative approach to software development that lets us quickly pivot when challenges arise."
        src={'/approach/approach-quote_large.jpg'}
        imageProps={{ height: 527, width: 600 }}
      />
    </Layout>
  );
};
