import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

import { BasicCard, CardGrid, Heading } from '~/components';
import { colors, spacing, xxl2 } from '~/theme';

const ImageContainer = styled.div`
  background: ${colors.coral};
  display: inline-block;
  height: 100%;
  width: 100%;
`;

type CaseStudySummaryPaneProps = {
  summaryText: string;
  alt: string;
  height: number;
  width: number;
  src: string;
};

export const CaseStudySummaryPane: FC<CaseStudySummaryPaneProps> = ({
  summaryText,
  alt,
  src,
}) => {
  return (
    <section
      css={css`
        margin-top: ${spacing.xxl2};
        display: inline-block;
        position: relative;
        z-index: 1;
      `}
    >
      <ImageContainer>
        <NextImage alt={alt} src={src} height={300} width={150} />
      </ImageContainer>
      <Heading
        as="h3"
        variant="h3"
        css={css`
          width: 50%;
          margin-top: -1em;
        `}
      >
        {summaryText}
      </Heading>
    </section>
  );
};
