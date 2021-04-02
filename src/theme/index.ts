/* ========================================================================== *
 * THEME
 * ========================================================================== */

import { colors } from './colors';
import { spacing } from './spacing';
import { textVariants } from './typography';

const theme = {
  colors,
  spacing,
  textVariants,
};

export type ThemeColor = keyof typeof colors;
export type ThemeTextVariants = keyof typeof textVariants;
export type ThemeType = typeof theme;
export default theme;
