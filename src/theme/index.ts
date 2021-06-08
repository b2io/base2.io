import { colors } from './colors';
import { general } from './general';
import { spacing } from './spacing';
import { linkVariants, textVariants } from './typography';

export * from './breakpoints';
export * from './colors';
export * from './spacing';
export * from './general';
export type { ThemeLinkVariants, ThemeTextVariants } from './typography';
export * from './util';

const theme = {
  colors,
  general,
  linkVariants,
  spacing,
  textVariants,
};

export type ThemeType = typeof theme;
export default theme;
