import { atMinLg, atMinTablet, atMinXL } from './breakpoints';
import { colors } from './colors';
import { spacing } from './spacing';
import { cssClamp } from './util';

export const linkVariants = {
  CTA: {
    color: colors.text,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: cssClamp([1.125, 'mobile'], [1.375, 'tablet']),
    fontVariationSettings: '"wght" 600',
    lineHeight: 1.56,
    padding: `${spacing.xs} ${spacing.sm}`,
    textDecoration: 'none',
  },
  default: {
    '&:hover': {
      color: colors.coral,
    },
    color: colors.text,
    cursor: 'pointer',
    fontSize: '1rem',
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
  redline: {
    ':hover': {
      '.redLine': {
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
    fontVariationSettings: '"wght" 600',
    lineHeight: 1.56,
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
    fontVariationSettings: '"wght" 300',
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
    fontSize: cssClamp([3.125, 'smMobile'], [3.75, 'mobile'], [6.25, 'tablet']),
    fontVariationSettings: '"wght" 900',
    letterSpacing: cssClamp([-0.03125, 'mobile'], [0, 'tablet']),
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
    lineHeight: cssClamp([2.75, 'mobile'], [3.75, 'tablet']),
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
      [3.75, 'smMobile'],
      [4.5, 'mobile'],
      [9.25, 'tablet'],
      [14, 'lg'],
    ),
    fontVariationSettings: '"wght" 900',
    letterSpacing: 'normal',
    lineHeight: 0.53,
    margin: 0,
    padding: 0,
  },
  pageHero: {
    [atMinTablet]: {
      lineHeight: 1.04,
    },
    color: colors.text,
    fontSize: cssClamp(
      [2.75, 'smMobile'],
      [3.25, 'mobile'],
      [4.75, 'tablet'],
      [6, 'lg'],
    ),
    fontVariationSettings: '"wght" 900',
    letterSpacing: cssClamp([-0.03125, 'mobile'], [0, 'tablet']),
    lineHeight: 1,
    margin: 0,
    padding: 0,
  },
  quotationsSymbol: {
    [atMinXL]: {
      fontSize: '37.5rem',
      lineHeight: 0.775,
    },
    color: colors.midBlue,
    fontSize: cssClamp([12.5, 'mobile'], [15, 'tablet']),
    fontVariationSettings: '"wght" 900',
    letterSpacing: 0,
    lineHeight: 0.125,
    margin: '0 0 0 -.5rem',
    padding: 0,
  },
  serviceTitle: {
    [atMinTablet]: {
      lineHeight: 1.33,
    },
    color: colors.coral,
    fontSize: cssClamp([1.75, 'mobile'], [2, 'tablet']),
    fontVariationSettings: '"wght" 300',
    letterSpacing: 'normal',
    lineHeight: 1.27,
    margin: 0,
    padding: 0,
  },
  teamHero: {
    color: colors.coral,
    fontSize: cssClamp(
      [3.5, 'smMobile'],
      [4.25, 'mobile'],
      [9, 'tablet'],
      [15, 'lg'],
    ),
    fontVariationSettings: '"wght" 900',
    letterSpacing: 'normal',
    lineHeight: 1,
    margin: 0,
    padding: 0,
  },
};

export type ThemeLinkVariants = keyof typeof linkVariants;
export type ThemeTextVariants = keyof typeof textVariants;
