import { colors } from './colors';
import { spacing } from './spacing';
import { textVariants } from './typography';

const theme = {
  colors,
  spacing,
  textVariants,
};

export type { ThemeColor } from './colors';
export type { ThemeTextVariants } from './typography';
export type ThemeType = typeof theme;
export default theme;
