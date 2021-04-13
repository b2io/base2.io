import { colors } from './colors';
import { spacing } from './spacing';
import { anchorVariants, textVariants } from './typography';

export * from './breakpoints';
export type { ThemeColor } from './colors';
export type { ThemeAnchorVariants, ThemeTextVariants } from './typography';
export * from './util';

const theme = {
  anchorVariants,
  colors,
  spacing,
  textVariants,
};

export type ThemeType = typeof theme;
export default theme;
