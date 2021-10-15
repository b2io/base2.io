import { useId } from '@react-aria/utils';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';

import { colors, interpolateColors, mRound } from '~/theme';

export const GradientCircle: FC = (props) => {
  const filterId = useId();
  const gradientId = useId();
  const clip1Id = useId();
  const clip2Id = useId();

  const ref = useRef(null);
  const inView =
    useIntersection(ref, { threshold: 0 })?.isIntersecting ?? false;
  const step = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(step, step.get() + 4, {
        duration: 24,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      });

      return controls.stop;
    }
  }, [inView, step]);

  const fx = useTransform(step, (v) => {
    // Use a cosine wave to oscillate through [0, 0.5, 1, 0.5, 0] based on v.
    return mRound(0.5 * Math.cos((Math.PI / 2) * (v + 2)) + 0.5, 5);
  });

  const fy = useTransform(step, (v) => {
    // Use a cosine wave to oscillate through [0.5, 1, 0.5, 0, 0.5] based on v.
    return mRound(0.5 * Math.cos((Math.PI / 2) * (v + 1)) + 0.5, 5);
  });

  const step2 = useMotionValue(10);

  useEffect(() => {
    if (inView) {
      const controls = animate(step2, 0, {
        delay: 0.5,
        duration: 1,
        ease: 'easeOut',
      });

      return controls.stop;
    }
  }, [inView, step2]);

  const cy1 = useTransform(step2, (v) => {
    return mRound(50 - v, 5);
  });

  const cy2 = useTransform(step2, (v) => {
    return mRound(50 + v, 5);
  });

  return (
    <svg
      height="100"
      overflow="visible"
      ref={ref}
      viewBox="0 0 100 100"
      width="100"
      {...props}
    >
      <defs>
        <clipPath id={clip1Id}>
          <motion.path
            d="M0,50 A50,50 0 0,1 100,50 L0,50Z"
            style={{ originX: '50%', originY: '50%', x: step2 }}
            transformTemplate={({ x }) => {
              return `rotate(90deg) translateX(-${x})`;
            }}
          />
        </clipPath>
        <clipPath id={clip2Id}>
          <motion.path
            d="M0,50 A50,50 0 0,1 100,50 L0,50Z"
            style={{ originX: '50%', originY: '50%', x: step2 }}
            transformTemplate={({ x }) => {
              return `rotate(-90deg) translateX(-${x})`;
            }}
          />
        </clipPath>
        <motion.radialGradient fx={fx} fy={fy} r="100%" id={gradientId}>
          {interpolateColors([colors.coral, colors.darkBlueAlt], 1).map(
            (color, index, colors) => {
              const offset = index / (colors.length - 1);

              return (
                <stop
                  key={`${offset}-${color}`}
                  offset={offset}
                  stopColor={color}
                />
              );
            },
          )}
        </motion.radialGradient>
        <filter id={filterId}>
          <feTurbulence
            baseFrequency="20"
            result="turbulence"
            stitchTiles="stitch"
            type="fractalNoise"
          />
          <feBlend in="SourceGraphic" in2="turbulence" mode="multiply" />
        </filter>
      </defs>
      <motion.circle
        clipPath={`url('#${clip1Id}')`}
        cx="50"
        cy={cy1}
        fill={`url('#${gradientId}')`}
        filter={`url('#${filterId}')`}
        r="50"
      />
      <motion.circle
        clipPath={`url('#${clip2Id}')`}
        cx="50"
        cy={cy2}
        fill={`url('#${gradientId}')`}
        filter={`url('#${filterId}')`}
        r="50"
      />
    </svg>
  );
};
