import { colors } from './colors';
import { spacing } from './spacing';
import { textVariants } from './typography';

export * from './breakpoints';
export type { ThemeColor } from './colors';
export type { ThemeTextVariants } from './typography';
export * from './util';

const theme = {
  colors,
  spacing,
  textVariants,
};

export type ThemeType = typeof theme;
export default theme;
