import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

import {
  atMinDesktop,
  atMinTablet,
  atMinXL,
  colors,
  spacing,
} from '~/theme';

const ColorBlock = styled.div`
  align-items: center;
  background: ${colors.coral};
  display: flex;
  height: 40em;
  justify-content: center;
  width: 100%;

  ${atMinXL} {
    height: 56.25rem;
    width: 41.688em;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  justify-content: center;
  position: relative;
  width: 14.375rem;

  ${atMinXL} {
    height: 100%;
    width: 20.625rem;
  }
`;

const Summary = styled.h2`
  font-size: 1.875rem;
  line-height: 1.2;
  margin: 0 1.5rem;
  position: relative;
  top: -3.7rem;
  word-break: keep-all;

  ${atMinTablet} {
    font-size: 3.125rem;
    max-width: 54.188rem;
  }

  ${atMinXL} {
    left: 35.438rem;
    margin: 0;
    
    position: absolute;
    top: 4rem;
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
        margin: 0 -${spacing.sm};
        margin-top: ${spacing.xxl2};
        position: relative;
        z-index: 1;

        ${atMinTablet} {
          margin-left: -${spacing.lg};
          margin-right: -${spacing.lg};
        }

        ${atMinXL} {
          margin-left: calc(50% - 50vw);
        }

        ${atMinDesktop} {
          margin-left: -5rem;
        }
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
      <Summary as="h2">{summaryText}</Summary>
    </section>
  );
};
