import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme from '~/theme';

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

const TextContainer = styled.div``;

const ImagesContainer = styled.div`
  columns: 2;
  /* display: inline-block; */
`;

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
          alt="something here"
          src="/home/img-sw-home-1@3x_TEMP.png"
          layout="responsive"
          width={322}
          height={572}
        />
        <Image
          alt="something here"
          src="/home/img-sw-home-3@3x_TEMP.png"
          layout="responsive"
          width={322}
          height={572}
        />
        <Image
          alt="something here"
          src="/home/img-sw-home-2@3x_TEMP.png"
          layout="responsive"
          width={322}
          height={572}
        />
        <Image
          alt="something here"
          src="/home/img-sw-home-4@3x_TEMP.png"
          layout="responsive"
          width={322}
          height={572}
        />
      </ImagesContainer>
    </FeaturedCaseStudyWrapper>
  );
};

export default FeaturedCaseStudyPane;
