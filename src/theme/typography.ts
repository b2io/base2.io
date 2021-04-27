import { atMinLg, atMinTablet } from './breakpoints';
import { colors } from './colors';
import { spacing } from './spacing';
import { cssClamp } from './util';

export const linkVariants = {
  CTA: {
    '::after': {
      backgroundColor: colors.action,
      content: '""',
      display: 'block',
      height: '0.125rem',
      marginTop: spacing.xxxs,
      width: '100%',
    },
    ':hover': {
      '::after': {
        backgroundColor: colors.offWhite,
      },
    },
    [atMinTablet]: {
      '::after': {
        marginTop: spacing.xxs,
      },
      fontSize: '1.375rem',
      lineHeight: 'normal',
    },
    color: colors.text,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: cssClamp([1.125, 'mobile'], [1.375, 'tablet']),
    fontVariationSettings: '"wght" 900',
    letterSpacing: cssClamp([0.006875, 'mobile'], [0.125, 'lg']),
    lineHeight: 1.56,
    textDecoration: 'none',
  },
  default: {
    '&:hover': {
      color: colors.coral,
    },
    color: colors.text,
    cursor: 'pointer',
    fontSize: '1.063rem',
    fontVariationSettings: '"wght" 500',
    lineHeight: 1.75,
    textDecoration: 'none',
  },
  large: {
    '&:hover': {
      color: colors.coral,
    },
    color: colors.text,
    cursor: 'pointer',
    fontSize: '2.5rem',
    fontVariationSettings: '"wght" 750',
    lineHeight: 1.1,
    textDecoration: 'none',
  },
};

export const textVariants = {
  body: {
    [atMinTablet]: {
      letterSpacing: 'normal',
    },
    color: colors.text,
    fontSize: '1.063rem',
    fontVariationSettings: '"wght" 500',
    letterSpacing: '0.006875rem',
    lineHeight: 1.65,
  },
  callout: {
    [atMinTablet]: {
      letterSpacing: 'normal',
      lineHeight: 1.2,
    },
    color: colors.coral,
    fontSize: cssClamp(
      [0.9035, 'smMobile'],
      [1.063, 'mobile'],
      [3.125, 'tablet'],
    ),
    fontVariationSettings: '"wght" 750',
    letterSpacing: '0.006875rem',
    lineHeight: 1.65,
  },
  h1: {
    [atMinTablet]: {
      lineHeight: 1.04,
    },
    color: colors.text,
    fontSize: cssClamp([3.75, 'mobile'], [6.25, 'lg']),
    fontVariationSettings: '"wght" 900',
    letterSpacing: cssClamp([-0.03125, 'mobile'], [0.125, 'lg']),
    lineHeight: 1,
    margin: 0,
    padding: 0,
  },
  h2: {
    [atMinTablet]: {
      lineHeight: 1.2,
    },
    color: colors.text,
    fontSize: cssClamp([2.5, 'mobile'], [3.125, 'tablet']),
    fontVariationSettings: '"wght" 750',
    letterSpacing: 'normal',
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
  },
  h3: {
    [atMinTablet]: {
      lineHeight: 1.33,
    },
    color: colors.text,
    fontSize: '1.875rem',
    fontVariationSettings: '"wght" 300',
    letterSpacing: 'normal',
    lineHeight: 1.27,
    margin: 0,
    padding: 0,
  },
  hero: {
    [atMinLg]: {
      lineHeight: 0.58,
    },
    [atMinTablet]: {
      lineHeight: 0.74,
    },
    color: colors.text,
    fontSize: cssClamp(
      [4.25, 'smMobile'],
      [5, 'mobile'],
      [10, 'tablet'],
      [15, 'lg'],
    ),
    fontVariationSettings: '"wght" 900',
    letterSpacing: 'normal',
    lineHeight: 0.53,
    margin: 0,
    padding: 0,
    textShadow: `${spacing.xxxs} ${spacing.xxxs} 0.375rem ${colors.darkBlue}`,
  },
};

export type ThemeLinkVariants = keyof typeof linkVariants;
export type ThemeTextVariants = keyof typeof textVariants;
