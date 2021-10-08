import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

import { colors, spacing } from '~/theme';

const ColorBlock = styled.div`
  align-items: center;
  background: ${colors.coral};
  display: flex;
  height: 40em;
  justify-content: center;
  /* margin: 0; */
  padding: ${spacing.md};
  width: 35em;
`;
const ImageContainer = styled.div`
  height: 100%;
  justify-content: center;
  margin: 50px;
  position: relative;
  width: 100%;
`;

const Summary = styled.h2`
  display: inline-block;
  line-height: 2rem;
  margin-left: -2rem;
  position: relative;
  top: 50%;
  transform: translateY(-90%);
  width: 50%;
  word-break: keep-all;
`;

type CaseStudySummaryPaneProps = NextImageProps & {
  summaryText: string;
  alt: string;
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
      <div
        css={css`
          display: inline-block;
        `}
      >
        <ColorBlock>
          <ImageContainer>
            <NextImage
              alt={alt}
              src={src}
              placeholder="blur"
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
        </ColorBlock>
      </div>
      <Summary as="h2" variant="h2">
        {summaryText}
      </Summary>
    </section>
  );
};
