import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import type { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import { atMinDesktop, atMinLg, atMinTablet, cssClamp, spacing } from '~/theme';
import type { ImageProps } from '~/types';

const HeroSectionContainer = styled.section`
  ${atMinDesktop} {
    position: relative;
  }
`;

const HeroTextContainer = styled.div``;

const HeroPreviewImageContainer = styled.div`
  ${atMinLg} {
    width: 19.938rem;
    & div:nth-of-type(1) {
      border-radius: 10px;
      box-shadow: 0 16px 21px 0 rgba(0, 0, 0, 0.53);
    }
  }
`;

const ImageContainer = styled.div`
  height: 20.188rem;
  height: ${cssClamp([20.188, 'smMobile'], [50, 'desktop'])};
  ${atMinLg} {
    margin: auto;
    max-width: 74.875rem;
  }
`;

const HeroImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
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

export const CaseStudyHeroImage: FC<ImageProps> = ({ alt, src }) => {
  return (
    <HeroSectionContainer>
      <ImageContainer>
        <HeroImage src={src} alt={alt} />
      </ImageContainer>
      <HeroPreviewImageContainer>
        <ResponsiveImage
          alt="paint a photo"
          src="/home/featured-case-study-home-1.png"
        />
      </HeroPreviewImageContainer>
      <HeroTextContainer>
        <Heading
          as="h2"
          css={css`
            margin-bottom: ${spacing.xxs};
          `}
          variant="body"
        >
          Sherwin Williams
        </Heading>
        <Heading
          as="h3"
          css={css`
            margin-bottom: ${spacing.sm};
          `}
          variant="h2"
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
          href="/work"
          variant="CTA"
        >
          View more
        </Link>
      </HeroTextContainer>
    </HeroSectionContainer>
  );
};
