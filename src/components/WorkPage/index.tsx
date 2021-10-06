import { css } from '@emotion/react';
import type { FC } from 'react';

import { ImageCard, Layout } from '~/components';
import { atMinXL, spacing } from '~/theme';

import { FeaturedCaseStudyHero } from './FeaturedCaseStudyHero';

export const WorkPage: FC = () => {
  return (
    <Layout
      description="Unique challenges 
    require unique solutions."
      title="Work"
    >
      <FeaturedCaseStudyHero />
      <div
        css={css`
          ${atMinXL} {
            margin-left: ${spacing.marginXl};
            margin-right: ${spacing.marginXl};
            margin-top: ${spacing.xxl3};
          }
        `}
      >
        <ImageCard
          heading="Paint a photo"
          src={require('../HomePage/featured-case-study-4.png')}
          text="Choose a sample photo or upload one of your own to give your space a virtual makeover"
        />
        <ImageCard
          heading="Digital color wall"
          src={require('../../../public/approach/howwebuild-large.jpg')}
          text="Explore 1,500 paint colors in the Sherwin-Williams color catalogue, and build yourself a custom color palette"
        />
        <ImageCard
          heading="Match a photo"
          src={require('../../../public/careers/careers-hero-xlarge.jpg')}
          text="Generate paint suggestions from any photo you upload to capture your favorite colors"
        />
      </div>
    </Layout>
  );
};
