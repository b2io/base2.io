import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { atMinSm, atMinTablet, atMinXL, cssClamp } from '~/theme';

const GUTTER_SHIFT = '1.375rem';

const FeaturedCaseStudyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  ${atMinXL} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  margin-left: ${cssClamp([1.74375, 'sm'], [5.625, 'tablet'], [7.6125, 'xl'])};
  ${atMinXL} {
    margin-top: 32%;
    order: 2;
    width: calc(50% - ${GUTTER_SHIFT});
  }
`;

const ImagesContainer = styled.div`
  columns: 2;
  column-gap: ${theme.spacing.xxs};
  ${atMinTablet} {
    column-gap: 2.875rem;
  }
  ${atMinXL} {
    width: calc(50% + ${GUTTER_SHIFT});
  }
`;

type ImageProps = {
  alt: string;
  src: string;
};

const ResponsiveImage: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div {...props}>
      <NextImage
        layout="responsive"
        alt={alt}
        src={src}
        width={400}
        height={706}
      />
    </div>
  );
};

export const FeaturedCaseStudy: FC = () => {
  return (
    <FeaturedCaseStudyWrapper>
      <TextContainer>
        <Heading
          as="h2"
          variant="body"
          color="coral"
          css={css`
            margin-bottom: ${theme.spacing.xxs};
          `}
        >
          Featured case study
        </Heading>
        <Heading
          as="h3"
          variant="h2"
          css={css`
            margin-bottom: ${theme.spacing.sm};
          `}
        >
          ColorSnap&reg;
          <br />
          Visualizer
        </Heading>
        <Text
          variant="h3"
          css={css`
            max-width: 19rem;
            ${atMinSm} {
              max-width: 30rem;
            }
          `}
        >
          As a leader in the paint industry, Sherwin-Williams wanted to create a
          tool worthy of their products - something to get customers excited
          about paint.
        </Text>
        <Link
          css={css`
            margin-top: ${theme.spacing.lg};
            margin-bottom: ${theme.spacing.lg};
            &::after {
              margin-top: 0.25rem;
            }
            ${atMinTablet} {
              margin-bottom: ${theme.spacing.xxl2};
              margin-top: 3rem;
            }
          `}
          href="/work"
          variant="CTA"
        >
          See our work
        </Link>
      </TextContainer>
      <ImagesContainer>
        <ResponsiveImage
          alt="paint a photo"
          src="/home/featured-case-study-home-1.png"
          css={css`
            padding-bottom: ${theme.spacing.xs};
            ${atMinTablet} {
              padding-bottom: 2.875rem;
            }
          `}
        />
        <ResponsiveImage
          alt="room with window, chair, and sofa"
          src="/home/featured-case-study-home-2.png"
        />
        <ResponsiveImage
          alt="living room and kitchen with sofa"
          src="/home/featured-case-study-home-3.png"
          css={css`
            padding-bottom: ${theme.spacing.xs};
            padding-top: 50%;
            ${atMinTablet} {
              padding-bottom: 2.875rem;
            }
          `}
        />
        <ResponsiveImage
          alt="bedroom with dresser and mirror"
          src="/home/featured-case-study-home-4.png"
        />
      </ImagesContainer>
    </FeaturedCaseStudyWrapper>
  );
};

export default FeaturedCaseStudy;
