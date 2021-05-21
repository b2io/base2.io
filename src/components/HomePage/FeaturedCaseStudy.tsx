import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useId } from '@react-aria/utils';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { transparentize } from 'polished';
import type { FC } from 'react';

import { Heading, Link, Text, useAnimationWhileVisible } from '~/components';
import theme, {
  atMinSm,
  atMinTablet,
  atMinXL,
  cssClamp,
  interpolateColors,
  spacing,
} from '~/theme';

const GUTTER_SHIFT = '1.375rem';

const TextContainer = styled.div`
  margin-left: ${cssClamp([1.74375, 'sm'], [5.625, 'tablet'], [7.6125, 'xl'])};
  position: relative;
  z-index: 1;

  ${atMinXL} {
    margin-top: 22rem;
    order: 2;
    width: calc(50% - ${GUTTER_SHIFT});
  }
`;

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
          x1="0.3"
          x2="1.3"
        >
          {interpolateColors(
            [theme.colors.coral, theme.colors.midBlue],
            12,
          ).map((color, index, colors) => {
            const offset = index / (colors.length - 1);

            return (
              <stop
                key={`${offset}-${color}`}
                offset={offset}
                stopColor={color}
              />
            );
          })}
        </motion.linearGradient>
        <linearGradient gradientTransform="rotate(90)" id={fadeGradientId}>
          <stop offset="0%" stopColor={theme.colors.darkBlue} />
          <stop
            offset="20%"
            stopColor={transparentize(1, theme.colors.darkBlue)}
          />
          <stop
            offset="80%"
            stopColor={transparentize(1, theme.colors.darkBlue)}
          />
          <stop offset="100%" stopColor={theme.colors.darkBlue} />
        </linearGradient>
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

const ImagesContainer = styled.div`
  column-gap: ${spacing.xxs};
  columns: 2;
  margin-bottom: 11rem;

  ${atMinTablet} {
    column-gap: 2.875rem;
    margin-bottom: 15rem;
  }

  ${atMinXL} {
    margin-bottom: 0%;
    margin-top: 8rem;
  }

  & div:nth-of-type(1) {
    border-radius: 10px;
    box-shadow: 0 16px 21px 0 rgba(0, 0, 0, 0.53);
  }
`;

type ImageProps = {
  alt: string;
  src: string;
};

const ResponsiveImage: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div {...props}>
      <NextImage
        alt={alt}
        height={706}
        layout="responsive"
        src={src}
        width={400}
      />
    </div>
  );
};

export const FeaturedCaseStudy: FC = (props) => {
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
      <TextContainer>
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
          ColorSnap<sup>&reg;</sup>
          <br />
          Visualizer
        </Heading>
        <Text
          css={css`
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
            margin-bottom: ${spacing.lg};
            margin-top: ${spacing.lg};
            &::after {
              margin-top: 0.25rem;
            }
            ${atMinTablet} {
              margin-bottom: ${spacing.xxl2};
              margin-top: 3rem;
            }
          `}
          href="/work"
          variant="CTA"
        >
          See our work
        </Link>
      </TextContainer>
      <div
        css={css`
          position: relative;
          ${atMinXL} {
            width: calc(50% + ${GUTTER_SHIFT});
          }
        `}
      >
        <Gradient />
        <ImagesContainer>
          <ResponsiveImage
            alt="paint a photo"
            css={css`
              padding-bottom: ${spacing.xs};
              ${atMinTablet} {
                padding-bottom: 2.875rem;
              }
            `}
            src="/home/featured-case-study-home-1.png"
          />
          <ResponsiveImage
            alt="room with window, chair, and sofa"
            src="/home/featured-case-study-home-3.png"
          />
          <ResponsiveImage
            alt="living room and kitchen with sofa"
            css={css`
              padding-bottom: ${spacing.xs};
              padding-top: 100%;
              ${atMinTablet} {
                padding-bottom: 2.875rem;
              }
            `}
            src="/home/featured-case-study-home-2.png"
          />
          <ResponsiveImage
            alt="bedroom with dresser and mirror"
            src="/home/featured-case-study-home-4.png"
          />
        </ImagesContainer>
      </div>
    </section>
  );
};
