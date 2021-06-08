import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import type { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import { atMinTablet, atMinXXL, cssClamp, general, spacing } from '~/theme';
import type { ImageProps } from '~/types';

import { CaseStudyHeroImage } from './CaseStudyHeroImage';

const SectionContainer = styled.section`
  ${atMinXXL} {
    position: relative;
  }
`;

const ImageContainer = styled.div`
  height: 20.188rem;
  height: ${cssClamp([20.188, 'smMobile'], [50, 'desktop'])};

  ${atMinXXL} {
    margin: auto;
    max-width: 74.875rem;
  }
`;

const TextContainer = styled.div`
  margin-top: -7.125rem;

  ${atMinTablet} {
    margin-top: -9.5rem;
    max-width: 35rem;
  }

  ${atMinXXL} {
    left: ${cssClamp([46, 'xxl'], [50, 'desktop'])};
    margin-top: unset;
    position: absolute;
    top: ${cssClamp([8.5, 'xxl'], [10.75, 'desktop'])};
  }
`;

const PreviewImageContainer = styled.div`
  display: none;

  ${atMinXXL} {
    display: block;
    position: absolute;
    top: ${cssClamp([5.25, 'xxl'], [8, 'desktop'])};
    width: 19.938rem;
    & div:nth-of-type(1) {
      border-radius: ${general.borderRadius};
      box-shadow: ${general.boxShadow};
    }
  }
`;

const ResponsiveImage: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div {...props}>
      <NextImage
        alt={alt}
        height={706}
        layout="responsive"
        src={src}
        width={400}
      />
    </div>
  );
};

export const FeaturedCaseStudyHero: FC = () => {
  return (
    <SectionContainer>
      <ImageContainer>
        <CaseStudyHeroImage
          alt="abstract collection of product screens"
          src="/work/work-featured-hero.jpg"
        />
      </ImageContainer>
      <PreviewImageContainer>
        <ResponsiveImage
          alt="paint a photo"
          src="/home/featured-case-study-home-1.png"
        />
      </PreviewImageContainer>
      <TextContainer>
        <Heading
          as="h2"
          css={css`
            ${atMinXXL} {
              margin-bottom: ${spacing.xxs};
            }
          `}
          variant="body"
        >
          Sherwin Williams
        </Heading>
        <Heading
          as="h1"
          css={css`
            margin-bottom: ${spacing.sm};
          `}
          variant="h1"
        >
          ColorSnap<sup>&reg;</sup>
          <br />
          Visualizer
        </Heading>
        <Text variant="h3">
          Empowering consumers to shop for paint and experience color like never
          before.
        </Text>
        <Link
          css={css`
            margin-bottom: ${spacing.lg};
            margin-top: ${spacing.lg};

            &::after {
              margin-top: 0.25rem;
            }

            ${atMinTablet} {
              margin-bottom: ${spacing.xxl2};
              margin-top: 3rem;
            }
          `}
          href="/work/colorsnap"
          variant="CTA"
        >
          View more
        </Link>
      </TextContainer>
    </SectionContainer>
  );
};
