import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import type { FC } from 'react';

import {
  atMinDesktop,
  atMinTablet,
  atMinXL,
  atMinXXL,
  colors,
  spacing,
} from '~/theme';

import { Heading } from '../Common/Heading';

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

const SummaryHeader = styled(Heading)`
  margin: 0 ${spacing.sm};
  max-width: 46rem;
  position: relative;
  top: -${spacing.xxl};

  ${atMinTablet} {
    margin: 0 auto;
  }

  ${atMinXL} {
    left: 34rem;
    margin: 0 ${spacing.xs};
    max-width: 52rem;
    position: absolute;
    top: ${spacing.sm};
  }

  ${atMinXXL} {
    margin: 0 ${spacing.md};
    top: ${spacing.xxl};
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
      <SummaryHeader as="h2" variant="h2">
        {summaryText}
      </SummaryHeader>
    </section>
  );
};
