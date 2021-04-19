import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { cssClamp } from '~/theme';

// type ImageProps = {
//   alt: string;
//   src: string;
// };

const FeaturedCaseStudyWrapper = styled.section`
  /* DELETE BELOW: JUST FOR VISUAL REFERENCE IN DEVELOPMENT */
  margin-top: 20rem;
  margin-bottom: 20rem;
  /* DELETE ABOVE: JUST FOR VISUAL REFERENCE IN DEVELOPMENT */
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  margin-left: ${cssClamp([1.74375, 'sm'], [5.625, 'md'])};
`;

const ImagesContainer = styled.div`
  columns: 2;
  column-gap: ${theme.spacing.xxs};
  > div {
    break-inside: avoid;
  }
`;

type ImageProps = {
  alt: string;
  src: string;
};

const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
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

export const FeaturedCaseStudyPane: FC = () => {
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
          `}
          href="/work"
          variant="CTA"
        >
          See our work
        </Link>
      </TextContainer>
      <ImagesContainer>
        <Image
          alt="case study image"
          src="/home/img-sw-home-1@3x_TEMP.png"
          css={css`
            margin-bottom: ${theme.spacing.xs};
          `}
        />
        <Image alt="case study image" src="/home/img-sw-home-3@3x_TEMP.png" />
        <Image alt="case study image" src="/home/img-sw-home-2@3x_TEMP.png" />
        <Image alt="case study image" src="/home/img-sw-home-4@3x_TEMP.png" />
      </ImagesContainer>
    </FeaturedCaseStudyWrapper>
  );
};

export default FeaturedCaseStudyPane;
