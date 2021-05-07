import { colors } from './colors';
import { spacing } from './spacing';
import { linkVariants, textVariants } from './typography';

export * from './breakpoints';
export * from './spacing';
export type { ThemeColor } from './colors';
export type { ThemeLinkVariants, ThemeTextVariants } from './typography';
export * from './util';

const theme = {
  colors,
  linkVariants,
  spacing,
  textVariants,
};

export type ThemeType = typeof theme;
export default theme;
