export type ScaledFontSizeArgs = {
  maxValue: number;
  maxWidth: number;
  minValue: number;
  minWidth: number;
};

export const responsiveViewportRelativeSize = ({
  maxValue,
  maxWidth,
  minValue,
  minWidth,
}: ScaledFontSizeArgs): string => {
  const slope = (maxValue - minValue) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minValue;

  return `clamp(${minValue}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxValue}rem)`;
};
