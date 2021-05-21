import css from '@emotion/css';
import { motion, MotionValue, transform, useTransform } from 'framer-motion';
import type { FC } from 'react';

import { Heading, Text, useMouseAnimationWhileVisible } from '~/components';
import { atMinLg, colors, cssClamp, interpolateColors } from '~/theme';

const LINE_COUNT = 75;
const LINE_RANGE = [0, LINE_COUNT - 1];
const LINE_WIDTH = 1000;
const SEGMENT_WIDTH = LINE_WIDTH / 8;
const LINE_HEIGHT = 4;
const LINE_MIN_OPACITY = 1 / 3;
const LINE_MIN_APEX_X = SEGMENT_WIDTH * 2;
const LINE_MAX_APEX_X = SEGMENT_WIDTH * 6;
const LINE_APEX_Y = 250;

interface LineProps {
  index: number;
  mouse: MotionValue<number[]>;
}

const Line: FC<LineProps> = ({ index, mouse }) => {
  const d = useTransform(mouse, ([mX, mY]) => {
    const x1 = transform(mX, [-1, 1], [0, LINE_MIN_APEX_X + SEGMENT_WIDTH]);
    const x2 = transform(mX, [-1, 1], [LINE_MIN_APEX_X, LINE_MAX_APEX_X]);
    const x3 = transform(
      mX,
      [-1, 1],
      [LINE_MAX_APEX_X - SEGMENT_WIDTH, LINE_WIDTH],
    );
    const x = (v: number): number => Math.max(0, Math.min(LINE_WIDTH, v));

    const yMod =
      mY >= 0
        ? transform(index, LINE_RANGE, [0, 1])
        : transform(index, LINE_RANGE, [1, 0]);
    const peakY = LINE_APEX_Y * mY * yMod;
    const yValue = transform(index, LINE_RANGE, [0, LINE_WIDTH - LINE_HEIGHT]);
    const y = (v: number): number => v + yValue;

    return [
      `M0,${y(0)}`,
      `L${x(x1)},${y(0)}`,
      // prettier-ignore
      `C${x(x1 + SEGMENT_WIDTH)},${y(0)} ${x(x2 - SEGMENT_WIDTH)},${y(peakY)} ${x(x2)},${y(peakY)}`,
      // prettier-ignore
      `C${x(x2 + SEGMENT_WIDTH)},${y(peakY)} ${x(x3 - SEGMENT_WIDTH)},${y(0)} ${x(x3)},${y(0)}`,
      `L1000,${y(0)}`,
      `L1000,${y(LINE_HEIGHT)}`,
      `L${x(x3)},${y(LINE_HEIGHT)}`,
      // prettier-ignore
      `C${x(x3 - SEGMENT_WIDTH)},${y(LINE_HEIGHT)} ${x(x2 + SEGMENT_WIDTH)},${y(peakY + LINE_HEIGHT)} ${x(x2)},${y(peakY + LINE_HEIGHT)}`,
      // prettier-ignore
      `C${x(x2 - SEGMENT_WIDTH)},${y(peakY + LINE_HEIGHT)} ${x(x1 + SEGMENT_WIDTH)},${y(LINE_HEIGHT)} ${x(x1)},${y(LINE_HEIGHT)}`,
      `L0,${y(LINE_HEIGHT)}`,
      `Z`,
    ].join(' ');
  });

  const opacity = useTransform(mouse, ([, mY]) => {
    const indexMod =
      mY >= 0
        ? transform(index, LINE_RANGE, [0, 1])
        : transform(index, LINE_RANGE, [1, 0]);

    return transform(Math.abs(mY * indexMod), [0, 1], [LINE_MIN_OPACITY, 1]);
  });

  return (
    <motion.path
      d={d}
      fill="url('#hh_lg_0')"
      stroke="transparent"
      strokeWidth="0.0125rem"
      style={{ opacity }}
      width="100%"
    />
  );
};

const STOP_COLORS = interpolateColors(
  [colors.midBlue, colors.coral, colors.midBlue],
  12,
);

const GRADIENT_CENTER_OFFSET = LINE_MIN_APEX_X / LINE_WIDTH;

export const HomeHero: FC = (props) => {
  const [ref, { point }] = useMouseAnimationWhileVisible<HTMLDivElement>(
    { damping: 10, stiffness: 75 },
    { threshold: 0 },
  );
  const x1 = useTransform(point, ([mX]) => {
    return transform(
      mX,
      [-1, 1],
      [-GRADIENT_CENTER_OFFSET, GRADIENT_CENTER_OFFSET],
    );
  });
  const x2 = useTransform(point, ([mX]) => {
    return transform(
      mX,
      [-1, 1],
      [1 - GRADIENT_CENTER_OFFSET, 1 + GRADIENT_CENTER_OFFSET],
    );
  });

  return (
    <div
      css={css`
        display: grid;
        gap: ${cssClamp([2, 'xs'], [1.5, 'lg'])};
        padding: ${cssClamp([3, 'xs'], [10.5, 'lg'])}
          // ignore vscode-styled-components error
          ${cssClamp([0, 'xs'], [1, 'smMobile'], [5.25, 'lg'])};
        position: relative;
        text-align: center;

        & * {
          text-shadow: 0.25rem 0.25rem 0.375rem ${colors.darkBlue};
          z-index: 1;
        }

        & svg {
          left: calc(50% - 50vw);
          width: 100vw;
          z-index: 0;
        }
      `}
      ref={ref}
      {...props}
    >
      <Heading as="h1">
        Software that{' '}
        <br
          css={css`
            display: none;

            ${atMinLg} {
              display: inline-block;
            }
          `}
        />
        moves people.
      </Heading>
      <Text variant="h3">At Base Two, it all starts with a human touch.</Text>
      <motion.svg
        css={css`
          left: 0;
          position: absolute;
          top: 0;
        `}
        height="100%"
        overflow="visible"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
        width="100%"
      >
        <defs>
          <motion.linearGradient id="hh_lg_0" x1={x1} x2={x2}>
            {STOP_COLORS.map((stopColor, index) => (
              <stop
                key={`${index}-${stopColor}`}
                offset={index / (STOP_COLORS.length - 1)}
                stopColor={stopColor}
              />
            ))}
          </motion.linearGradient>
        </defs>
        {Array.from({ length: LINE_COUNT }, (_, index) => (
          <Line index={index} key={index} mouse={point} />
        ))}
      </motion.svg>
    </div>
  );
};
