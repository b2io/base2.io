import { css } from '@emotion/react';
import NextImage from 'next/image';
import type { FC } from 'react';

import { Heading, Text } from '~/components';
import theme, {
  atMinLg,
  atMinSm,
  atMinTablet,
  atMinXL,
  cssClamp,
  spacing,
} from '~/theme';

const largeImageHeightCalc = cssClamp([26.625, 'tablet'], [50, 'desktop']);
const imageTopCalc = cssClamp(
  [2.95, 'mobile'],
  [7, 'tablet'],
  [8.25, 'desktop'],
);

export const BuiltForResults: FC = (props) => {
  return (
    <section
      css={css`
        min-height: calc(${imageTopCalc} + ${largeImageHeightCalc});
        position: relative;
      `}
      {...props}
    >
      <div
        css={css`
          height: ${cssClamp([20.188, 'mobile'], [26.625, 'tablet'])};
          left: calc(50% - 50vw - 5.8545rem);
          position: absolute;
          top: ${imageTopCalc};
          width: ${cssClamp([26.042, 'mobile'], [34.313, 'tablet'])};

          ${atMinTablet} {
            height: ${largeImageHeightCalc};
            left: unset;
            right: max(-10rem, calc(50% - 50vw));
            width: ${cssClamp([34.313, 'tablet'], [64.5, 'desktop'])};
          }
        `}
      >
        <NextImage
          alt="person looking at computer"
          placeholder="blur"
          src={require('./built-for-results.jpg')}
        />
      </div>
      <Heading
        as="h2"
        css={css`
          margin-left: ${cssClamp(
            [0, 'mobile'],
            [7.5, 'tablet'],
            [22.8375, 'desktop'],
          )};
          position: relative;
        `}
        variant="hero"
      >
        <Text
          as="span"
          css={css`
            display: block;
            left: ${cssClamp(
              [2.813, 'mobile'],
              [5, 'tablet'],
              [8.375, 'desktop'],
            )};
            position: relative;
          `}
          className="callout"
          variant="callout"
        >
          Built for
        </Text>
        <span
          css={css`
            display: block;
            position: relative;
            top: -0.3rem;

            ${atMinTablet} {
              top: -${theme.spacing.sm};
            }
          `}
        >
          results.
        </span>
      </Heading>
      <div
        css={css`
          margin-left: 1.688rem;
          margin-top: 13rem;
          position: relative;

          ${atMinSm} {
            max-width: 31rem;
          }

          ${atMinTablet} {
            margin-left: 0;
            margin-top: 8.75rem;
          }

          ${atMinLg} {
            margin-left: ${spacing.marginXl};
          }

          ${atMinXL} {
            max-width: 35rem;
          }
        `}
      >
        <Text
          color="coral"
          css={css`
            margin: 0 0 ${theme.spacing.xxs} 0;
          `}
        >
          Function. Form. ROI.
        </Text>
        <Heading
          as="h3"
          css={css`
            margin-bottom: ${theme.spacing.sm};
          `}
          variant="h2"
        >
          Software that works? That&rsquo;s a given.
        </Heading>
        <Text variant="h3">
          Let&rsquo;s create something that solves your biggest challenge
          &ndash; and continues to drive value over time.
        </Text>
      </div>
    </section>
  );
};
