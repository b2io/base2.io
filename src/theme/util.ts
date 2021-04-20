import { bp, BreakpointName } from './breakpoints';

type REM = number;
type ClampPair = [REM, BreakpointName];

const BASE_FONT_SIZE = 16;

export const cssClamp = (...pairs: ClampPair[]): string => {
  const [[startValue, startBP], [endValue, endBP], ...remainingPairs] = pairs;
  const minWidth = bp[startBP] / BASE_FONT_SIZE;
  const maxWidth = bp[endBP] / BASE_FONT_SIZE;

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
