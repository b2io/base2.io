import { css } from '@emotion/react';
import styled from '@emotion/styled';
// import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Text } from '~/components';
// import theme, { atMinDesktop, atMinMd, cssClamp } from '~/theme';

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

const ContentContainer = styled.div``;

const ImagesContainer = styled.div``;

export const FeaturedCaseStudyPane: FC = () => {
  return (
    <FeaturedCaseStudyWrapper>
      <ContentContainer>
        {/* TODO: make this a styled component */}
        <Heading
          as="h2"
          variant="body"
          color="coral"
          css={css`
            margin-bottom: 0.75rem;
          `}
        >
          Featured case study
        </Heading>
        {/* TODO: make this a styled component */}
        <Heading
          as="h3"
          variant="h2"
          css={css`
            margin-bottom: 1.5rem;
          `}
        >
          ColorSnap&reg;
          <br />
          Visualizer
        </Heading>
        <Text variant="h3">
          As a leader in the paint industry, Sherwin-Williams wanted to create a
          tool worthy of their products - something to get customers excited
          about paint.
        </Text>
      </ContentContainer>
      <ImagesContainer>
        <div>image</div>
        <div>image</div>
        <div>image</div>
        <div>image</div>
      </ImagesContainer>
    </FeaturedCaseStudyWrapper>
  );
};

export default FeaturedCaseStudyPane;
