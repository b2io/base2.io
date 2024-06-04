import { css } from '@emotion/react';
import { useId } from '@react-aria/utils';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import type { FC } from 'react';

import {
  Heading,
  Link,
  Text,
  TrademarkSymbol,
  useAnimationWhileVisible,
} from '~/components';
import theme, {
  atMinDesktop,
  atMinSm,
  atMinTablet,
  atMinXL,
  cssClamp,
  general,
  interpolateColors,
  spacing,
} from '~/theme';

const GUTTER_SHIFT = '1.375rem';

const GRADIENT_STOPS = interpolateColors(
  [theme.colors.coral, theme.colors.midBlue],
  12,
).map((color, index, colors) => {
  const offset = index / (colors.length - 1);

  return <stop key={`${offset}-${color}`} offset={offset} stopColor={color} />;
});

const Gradient: FC = () => {
  const filterId = useId();
  const linearGradientId = useId();
  const fadeGradientId = useId();
  const [ref, controls] = useAnimationWhileVisible(
    {
      transition: {
        duration: 32,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
      x1: [0.3, 2.3],
      x2: [1.3, 3.3],
    },
    { threshold: 0 },
  );

  return (
    <svg
      css={css`
        bottom: 0;
        height: calc(100% + 15rem);
        left: -${spacing.sm};
        position: absolute;
        top: -4rem;
        width: calc(100% + (2 * ${spacing.sm}));

        ${atMinTablet} {
          height: calc(100% + 25rem);
          left: -2.5rem;
          top: -10rem;
          width: calc(100% + (2 * ${spacing.lg}));
        }

        ${atMinXL} {
          height: calc(100% - 8rem);
          left: max(-10rem, calc(50% - 50vw));
          top: 0;
          width: 100%;
        }
      `}
      preserveAspectRatio="none"
      ref={ref}
      viewBox="0 0 100 100"
    >
      <defs>
        <motion.linearGradient
          animate={controls}
          gradientTransform="rotate(90)"
          id={linearGradientId}
          spreadMethod="reflect"
        >
          {GRADIENT_STOPS}
        </motion.linearGradient>
        <filter id={filterId}>
          <feTurbulence
            baseFrequency="20"
            result="noise"
            stitchTiles="stitch"
            type="fractalNoise"
          />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </defs>
      <rect
        clip="circle() view-box"
        fill={`url('#${linearGradientId}')`}
        filter={`url('#${filterId}')`}
        height="100"
        width="100"
      />
      <rect
        clip="circle() view-box"
        fill={`url('#${fadeGradientId}')`}
        height="100"
        width="100"
      />
    </svg>
  );
};

export type FeaturedCaseStudyProps = Record<string, unknown>;

export const FeaturedCaseStudy: FC<FeaturedCaseStudyProps> = (props) => {
  return (
    <section
      css={css`
        ${atMinXL} {
          display: flex;
          flex-direction: row;
        }
      `}
      {...props}
    >
      <div
        css={css`
          margin-left: ${cssClamp(
            [1.74375, 'sm'],
            [5.625, 'tablet'],
            [7.6125, 'xl'],
          )};
          position: relative;
          z-index: 1;

          ${atMinXL} {
            margin-top: 22rem;
            order: 2;
            width: calc(50% - ${GUTTER_SHIFT});
          }
        `}
      >
        <Heading
          as="h2"
          color="coral"
          css={css`
            margin-bottom: ${spacing.xxs};
          `}
          variant="body"
        >
          Featured case study
        </Heading>
        <Heading
          as="h3"
          css={css`
            margin-bottom: ${spacing.sm};
          `}
          variant="h2"
        >
          ColorSnap
          <TrademarkSymbol />
          <br />
          Visualizer
        </Heading>
        <Text
          css={css`
            margin-bottom: ${spacing.lg};
            max-width: 19rem;

            ${atMinSm} {
              max-width: 30rem;
            }
          `}
          variant="h3"
        >
          As a leader in the paint industry, Sherwin-Williams wanted to create a
          tool worthy of their products &ndash; something to get customers
          excited about paint.
        </Text>
        <Link
          css={css`
            padding-bottom: ${spacing.xxl2};
            ${atMinDesktop} {
              padding-bottom: ${spacing.xxl};
            }
          `}
          href="/work/colorsnap"
          variant="CTA"
        >
          How We Did It
        </Link>
      </div>
      <div
        css={css`
          position: relative;

          ${atMinXL} {
            width: calc(50% + ${GUTTER_SHIFT});
          }
        `}
      >
        <Gradient />
        <div
          css={css`
            --column-shift: ${spacing.xxl};

            display: grid;
            gap: ${spacing.xs};
            grid-template-columns: repeat(2, 1fr);
            margin-bottom: 11rem;

            img {
              height: auto;
              width: 100%;
              z-index: 1;
            }

            ${atMinTablet} {
              --column-shift: ${spacing.xxl3};

              gap: 2.875rem;
              margin-bottom: 15rem;
            }

            ${atMinXL} {
              margin-bottom: 0;
              margin-top: 8rem;
            }

            > * {
              border-radius: ${general.borderRadius};
              box-shadow: ${general.boxShadow};

              &:nth-of-type(2n) {
                transform: translateY(var(--column-shift));
              }
            }
          `}
        >
          <NextImage
            alt="paint a photo"
            placeholder="blur"
            src={require('./featured-case-study-1.png')}
          />
          <NextImage
            alt="room with window, chair, and sofa"
            placeholder="blur"
            src={require('./featured-case-study-2.png')}
          />
          <NextImage
            alt="living room and kitchen with sofa"
            placeholder="blur"
            src={require('./featured-case-study-3.png')}
          />
          <NextImage
            alt="bedroom with dresser and mirror"
            placeholder="blur"
            src={require('./featured-case-study-4.png')}
          />
        </div>
      </div>
    </section>
  );
};
