import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import type { FC } from 'react';

import { CaseStudyHeroImage, Heading, Link, Text } from '~/components';
import { atMinDesktop, atMinTablet, cssClamp, spacing } from '~/theme';
import type { ImageProps } from '~/types';

const SectionContainer = styled.section`
  ${atMinDesktop} {
    position: relative;
  }
`;

const ImageContainer = styled.div`
  height: 20.188rem;
  height: ${cssClamp([20.188, 'smMobile'], [50, 'desktop'])};
  ${atMinDesktop} {
    margin: auto;
    max-width: 74.875rem;
  }
`;

const TextContainer = styled.div`
  margin-top: -3.5rem;
  ${atMinTablet} {
    max-width: 35rem;
  }
  ${atMinDesktop} {
    left: 50rem;
    margin-top: unset;
    position: absolute;
    top: 11.5rem;
  }
`;

const PreviewImageContainer = styled.div`
  display: none;
  ${atMinDesktop} {
    display: block;
    position: absolute;
    top: 8rem;
    width: 19.938rem;
    & div:nth-of-type(1) {
      border-radius: 10px;
      box-shadow: 0 16px 21px 0 rgba(0, 0, 0, 0.53);
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
            display: none;
            ${atMinDesktop} {
              display: block;
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
