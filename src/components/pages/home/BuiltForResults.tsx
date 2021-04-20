import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { atMinDesktop, atMinTablet, cssClamp } from '~/theme';

type ImageProps = {
  alt: string;
  src: string;
};

// TODO: rename?
const BuiltForlargeImageHeightCalc = cssClamp(
  [26.625, 'tablet'],
  [50, 'desktop'],
);
// TODO: rename?
const BuiltForimageTopCalc = cssClamp(
  [2.95, 'mobile'],
  [7, 'tablet'],
  [8.25, 'desktop'],
);

const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div
      css={css`
        height: ${cssClamp([20.188, 'mobile'], [26.625, 'tablet'])};
        left: calc(50% - 50vw - 5.8545rem);
        position: absolute;
        top: ${BuiltForimageTopCalc};
        width: ${cssClamp([26.042, 'mobile'], [34.313, 'tablet'])};
        ${atMinTablet} {
          height: ${BuiltForlargeImageHeightCalc};
          left: max(-10rem, calc(50% - 50vw));
          width: ${cssClamp([34.313, 'tablet'], [64.5, 'desktop'])};
        }
      `}
      {...props}
    >
      <NextImage layout="fill" alt={alt} src={src} />
    </div>
  );
};
// TODO: rename?
const BuiltForHeaderText = styled(Heading)`
  margin-left: ${cssClamp([0, 'tablet'], [6.688, 'desktop'])};
  position: relative;

  .callout {
    display: block;
    left: ${cssClamp([2.813, 'mobile'], [5, 'tablet'], [8.375, 'desktop'])};
    position: relative;
  }

  .large-text {
    display: block;
    position: relative;
    top: -0.3rem;
    ${atMinTablet} {
      top: -1.25rem;
    }
  }
`;
// TODO: rename?
const BuiltForContent = styled.div`
  margin-left: ${cssClamp([1.688, 'mobile'], [11.563, 'tablet'])};
  margin-top: 12.75rem;
  position: relative;
  ${atMinTablet} {
    margin-top: 9.25rem;
  }
  ${atMinDesktop} {
    margin-left: 7.5rem;
  }

  .heading {
    margin-bottom: ${theme.spacing.sm};
    max-width: 36.75rem;
  }

  .tagline {
    margin: 0 0 0.125rem;
    ${atMinDesktop} {
      margin-bottom: ${theme.spacing.xxs};
    }
  }
`;

export const BuiltForResults: FC = () => {
  return (
    <section
      css={css`
        min-height: calc(
          ${BuiltForimageTopCalc} + ${BuiltForlargeImageHeightCalc}
        );
        position: relative;
        /* REMOVE: JUST FOR DEV VIEW */
        margin-top: 10rem;
        margin-bottom: 10rem;
        /* REMOVE: JUST FOR DEV VIEW */
      `}
    >
      <Image alt="person looking at computer" src="/home/results.jpg" />
      <BuiltForHeaderText as="h2" variant="hero">
        <Text className="callout" as="span" variant="callout">
          Built for
        </Text>
        <span className="large-text">results.</span>
      </BuiltForHeaderText>
      <BuiltForContent>
        <Text className="tagline">Function. Form. ROI.</Text>
        <Heading as="h3" className="header" variant="h2">
          Software that works? That&rsquo;s a given.
        </Heading>

        <Text variant="h3">
          Let&lsquo;s create something that solves your biggest challenge - and
          continues to drive value over time.
        </Text>
        <Link
          css={css`
            margin-top: ${theme.spacing.lg};
            &:after {
              margin-top: 0.25rem;
            }
          `}
          href="/work"
          variant="CTA"
        >
          See our work
        </Link>
      </BuiltForContent>
    </section>
  );
};

export default BuiltForResults;
