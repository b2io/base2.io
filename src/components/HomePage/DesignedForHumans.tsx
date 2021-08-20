import { css } from '@emotion/react';
import NextImage from 'next/image';
import type { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { atMinDesktop, atMinTablet, cssClamp } from '~/theme';

const largeImageHeightCalc = cssClamp([26.625, 'tablet'], [50, 'desktop']);
const imageTopCalc = cssClamp(
  [2.95, 'mobile'],
  [7, 'tablet'],
  [8.25, 'desktop'],
);

export const DesignedForHumans: FC = (props) => {
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
          margin-top: 0 !important;
          position: absolute;
          top: ${imageTopCalc};
          width: ${cssClamp([26.042, 'mobile'], [34.313, 'tablet'])};

          ${atMinTablet} {
            height: ${largeImageHeightCalc};
            left: max(-10rem, calc(50% - 50vw));
            width: ${cssClamp([34.313, 'tablet'], [64.5, 'desktop'])};
          }
        `}
        {...props}
      >
        <NextImage
          alt="desks with computers"
          placeholder="blur"
          src={require('./designed-for-humans.jpg')}
        />
      </div>
      <Heading
        as="h2"
        css={css`
          margin-left: ${cssClamp([0, 'tablet'], [6.688, 'desktop'])};
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
          variant="callout"
        >
          Designed for
        </Text>
        <span
          css={css`
            display: block;
            position: relative;
            top: -0.3rem;

            ${atMinTablet} {
              top: -1.25rem;
            }
          `}
        >
          humans.
        </span>
      </Heading>
      <div
        css={css`
          margin-left: ${cssClamp([1.688, 'mobile'], [11.563, 'tablet'])};
          margin-top: 12.75rem;
          position: relative;

          ${atMinTablet} {
            margin-top: 9.25rem;
          }

          ${atMinDesktop} {
            margin-left: 7.5rem;
          }
        `}
      >
        <Text
          css={css`
            margin: 0 0 ${theme.spacing.xxs};

            ${atMinDesktop} {
              margin-bottom: ${theme.spacing.xxs};
            }
          `}
        >
          Passionate. Tenacious. Enthusiastic.
        </Text>
        <div
          css={css`
            ${atMinDesktop} {
              display: flex;
            }
          `}
        >
          <Heading
            as="h3"
            css={css`
              margin-bottom: ${theme.spacing.sm};
              max-width: 36.75rem;
            `}
            variant="h2"
          >
            The best software starts with a human touch.
          </Heading>
          <div
            css={css`
              max-width: 29.125rem;
              ${atMinDesktop} {
                margin-left: 9rem;
                margin-top: ${theme.spacing.xxs};
              }
            `}
          >
            <Text variant="h3">
              We build software that helps real people solve real problems with
              greater ease through a flexible approach that prioritizes you and
              your end-user.
            </Text>
            <Link
              css={css`
                margin-top: ${theme.spacing.lg};
              `}
              href="/approach"
              variant="CTA"
            >
              See our approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
