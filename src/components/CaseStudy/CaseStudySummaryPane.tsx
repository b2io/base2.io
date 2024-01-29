import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import type { FC } from 'react';

import { Heading } from '~/components';
import {
  atMinDesktop,
  atMinTablet,
  atMinXL,
  atMinXXL,
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

type CaseStudySummaryPaneProps = {
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
          margin-left: -${spacing.xxl};
          margin-right: -${spacing.xxl};
        }

        ${atMinXXL} {
          margin-left: calc(50% - 50vw);
        }

        ${atMinDesktop} {
          margin-left: -${spacing.xxl1};
        }
      `}
    >
      <ColorBlock>
        <ImageContainer>
          <NextImage
            alt={alt}
            src={src}
            css={css`
              object-fit: contain;
              height: 100%;
              width: 100%;
            `}
          />
        </ImageContainer>
      </ColorBlock>
      <div
        css={css`
          margin: 0 ${spacing.sm};
          position: relative;
          top: -${spacing.xxl};

          ${atMinTablet} {
            max-width: 42rem;
            margin: 0 auto;
          }

          ${atMinXL} {
            left: 36rem;
            margin: 0 ${spacing.xs};
            position: absolute;
            top: ${spacing.md};
          }
        `}
      >
        <Heading as="h2" variant="h2">
          {summaryText}
        </Heading>
      </div>
    </section>
  );
};
