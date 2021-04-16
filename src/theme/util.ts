import { bp } from './breakpoints';

/* eslint-disable sort-keys */
const relativeBP = {
  xs: { max: (bp.sm - 1) / 16, min: -Infinity },
  sm: { max: (bp.md - 1) / 16, min: bp.sm / 16 },
  md: { max: (bp.lg - 1) / 16, min: bp.md / 16 },
  lg: { max: (bp.xl - 1) / 16, min: bp.lg / 16 },
  xl: { max: (bp.xxl - 1) / 16, min: bp.xl / 16 },
  xxl: { max: (bp.xxl2 - 1) / 16, min: bp.xxl / 16 },
  xxl2: { max: Infinity, min: bp.xxl2 / 16 },
};
/* eslint-enable sort-keys */

type REM = number;

type BreakpointName = keyof typeof relativeBP;

type ClampPair = [REM, BreakpointName];

export const cssClamp = (...pairs: ClampPair[]): string => {
  const [[startValue, startBP], [endValue, endBP], ...remainingPairs] = pairs;
  const minWidth = relativeBP[startBP].max;
  const maxWidth = relativeBP[endBP].min;

  // Rel: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
  const slope = (endValue - startValue) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + startValue;

  const minExpression = `${startValue}rem`;
  const valExpression = `${yAxisIntersection}rem + ${slope * 100}vw`;
  const maxExpression =
    remainingPairs.length > 0
      ? cssClamp([endValue, endBP], ...remainingPairs)
      : `${endValue}rem`;

  return `clamp(${minExpression}, ${valExpression}, ${maxExpression})`;
};
