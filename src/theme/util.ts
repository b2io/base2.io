import { hsla, parseToHsl } from 'polished';
import { HslaColor } from 'polished/lib/types/color';

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

const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

export const interpolateColors = (
  colors: string[],
  steps: number,
): string[] => {
  return colors
    .slice(0, -1)
    .reduce<string[]>((result, color, colorIndex) => {
      const nextColor = colors[colorIndex + 1];

      const {
        alpha: xA = 1,
        hue: xH,
        lightness: xL,
        saturation: xS,
      } = parseToHsl(color) as HslaColor;
      const {
        alpha: yA = 1,
        hue: yH,
        lightness: yL,
        saturation: yS,
      } = parseToHsl(nextColor) as HslaColor;

      return [
        ...result,
        ...Array.from({ length: steps + 2 }, (_, stepIndex) => {
          const step = stepIndex / (steps + 1);

          // Don't include the trailing/leading color twice for colors with length >= 3.
          if (step === 0 && colorIndex !== 0) {
            return '';
          }

          return hsla({
            alpha: lerp(xA, yA, step),
            hue: lerp(xH, yH, step),
            lightness: lerp(xL, yL, step),
            saturation: lerp(xS, yS, step),
          });
        }),
      ];
    }, [])
    .filter(Boolean);
};

export const mRound = (value: number, places: number): number => {
  const factor = 10 ** places;

  return Math.round((value + Number.EPSILON) * factor) / factor;
};
