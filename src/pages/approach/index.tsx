import { NextPage } from 'next';
import { css } from '@emotion/react';

import { Heading, Layout, Link, PageHero } from '~/components';
import { spacing, atMinTablet } from '~/theme';

const heroImageSource = {
  largeDesktop: '/approach/approach-hero-xlarge.jpg',
  tablet: '/approach/approach-hero-medium.jpg',
  xl: '/approach/approach-hero-large.jpg',
  xs: '/approach/approach-hero-small.jpg',
};

const ApproachIndexPage: NextPage = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at a computer"
        imgSource={heroImageSource}
        text="People motivate what we do and how we do it"
        css={css`
          margin-bottom: ${spacing.xxl2};

          ${atMinTablet} {
            margin-bottom: ${spacing.xxl3};
          }
        `}
      />

      <Heading
        as="h2"
        variant="h2"
        css={css`
          margin-bottom: ${spacing.xs};
        `}
      >
        How we build.
      </Heading>
      <Heading
        as="h3"
        variant="h3"
        css={css`
          margin-bottom: ${spacing.xxl};
          max-width: 51.938rem;

          ${atMinTablet} {
            margin-bottom: ${spacing.xxl2};
          }
        `}
      >
        Let&apos;s face it—things pop up along the way. Our development process
        is intentionally flexible to allow us to accomodate the unexpected.
        While we work with everyone uniquely, a few steps are central to our
        approach.
      </Heading>
      <Link href="" variant="CTA">
        Let&apos;s make a plan together
      </Link>
    </Layout>
  );
};

export default ApproachIndexPage;
