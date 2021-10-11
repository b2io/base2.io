import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

import { atMinDesktop, atMinTablet, colors, spacing } from '~/theme';

const ColorBlock = styled.div`
  align-items: center;
  background: ${colors.coral};
  display: flex;
  justify-content: center;
  margin: 0;
  padding: ${spacing.md};
  width: 100%;
  height: 40em;

  ${atMinTablet} {
    width: 35em;
  }
`;
const ImageContainer = styled.div`
  justify-content: center;
  position: relative;
  height: 20rem;
  width: 20rem;

  ${atMinTablet} {
    height: 100%;
    margin: 120px;
    width: 100%;
  }
`;

const Summary = styled.h2`
  line-height: 1.5;
  position: relative;
  word-break: keep-all;

  ${atMinTablet} {
    font-size: 2rem;
  }

  ${atMinDesktop} {
    display: inline-block;
    font-size: 2rem;
    margin-left: -4rem;
    top: 50%;
    transform: translateY(-35%);
    width: 50%;
  }
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
      <Summary as="h2">{summaryText}</Summary>
    </section>
  );
};
