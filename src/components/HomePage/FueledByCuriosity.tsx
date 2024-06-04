import { css } from '@emotion/react';
import type { FC } from 'react';

import { GradientCircle, Heading, Link, Text } from '~/components';
import { atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';

const circleDimensionsCalc = cssClamp([32, 'mobile'], [69.5, 'tablet']);
const circleTopCalc = cssClamp([1.85, 'mobile'], [0, 'tablet']);

export const FueledByCuriosity: FC = (props) => {
  return (
    <section
      css={css`
        min-height: calc(${circleTopCalc} + ${circleDimensionsCalc});
        position: relative;
      `}
      {...props}
    >
      <GradientCircle
        css={css`
          height: ${circleDimensionsCalc};
          position: absolute;
          right: calc(77.5% - ${circleDimensionsCalc});
          top: ${circleTopCalc};
          width: ${circleDimensionsCalc};

          ${atMinXL} {
            right: -22rem;
          }
        `}
      />
      <Heading
        css={css`
          margin-left: ${cssClamp([0, 'xl'], [15.225, 'xxl'])};
          position: relative;
          top: ${cssClamp([0, 'mobile'], [9, 'tablet'])};
        `}
        as="h2"
        variant="hero"
      >
        <Text
          css={css`
            display: block;
            left: 2rem;
            position: relative;

            ${atMinTablet} {
              left: ${cssClamp([1.75, 'tablet'], [8.25, 'xl'])};
            }
          `}
          as="span"
          variant="callout"
        >
          Fueled by
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
          curiosity.
        </span>
      </Heading>
      <div
        css={css`
          margin-left: 1.74375rem;
          margin-top: ${cssClamp([6.75, 'mobile'], [19, 'tablet'])};
          position: relative;

          ${atMinTablet} {
            margin-left: ${cssClamp([0, 'tablet'], [7.6125, 'xl'])};
            max-width: 52rem;
          }
        `}
      >
        <Text variant="h2">
          We&rsquo;re thoughtful, passionate, and we never settle for
          &ldquo;good enough.&rdquo; Undeterred by novel problems, our team
          tackles each one with tenacity, creativity, and excitement.
        </Text>
        <Link
          css={css`
            margin-top: ${spacing.lg};
          `}
          href="/culture"
          variant="CTA"
        >
          Discover Our Team
        </Link>
      </div>
    </section>
  );
};
