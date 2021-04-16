import { atMinLg, atMinMd } from './breakpoints';
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
      marginTop: spacing.xxs,
      width: '100%',
    },
    ':hover': {
      '::after': {
        backgroundColor: colors.offWhite,
      },
    },
    [atMinMd]: {
      fontSize: '1.375rem',
      lineHeight: 'normal',
    },
    color: colors.text,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: cssClamp([1.125, 'xs'], [1.375, 'md']),
    fontVariationSettings: '"wght" 900',
    letterSpacing: cssClamp([0.006875, 'xs'], [0.125, 'lg']),
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
    [atMinMd]: {
      letterSpacing: 'normal',
    },
    color: colors.text,
    fontSize: '1.063rem',
    fontVariationSettings: '"wght" 500',
    letterSpacing: '0.006875rem',
    lineHeight: 1.65,
  },
  h1: {
    [atMinMd]: {
      lineHeight: 1.04,
    },
    color: colors.text,
    fontSize: cssClamp([3.75, 'xs'], [6.25, 'lg']),
    fontVariationSettings: '"wght" 900',
    letterSpacing: cssClamp([-0.03125, 'xs'], [0.125, 'lg']),
    lineHeight: 1,
    margin: 0,
    padding: 0,
  },
  h2: {
    [atMinMd]: {
      lineHeight: 1.2,
    },
    color: colors.text,
    fontSize: cssClamp([2.5, 'xs'], [3.125, 'md']),
    fontVariationSettings: '"wght" 750',
    letterSpacing: 'normal',
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
  },
  h3: {
    [atMinMd]: {
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
    [atMinMd]: {
      lineHeight: 0.74,
    },
    color: colors.text,
    fontSize: cssClamp([5, 'xs'], [10, 'md'], [15, 'lg']),
    fontVariationSettings: '"wght" 900',
    letterSpacing: 'normal',
    lineHeight: 0.53,
    margin: 0,
    padding: 0,
  },
};

export type ThemeLinkVariants = keyof typeof linkVariants;
export type ThemeTextVariants = keyof typeof textVariants;
