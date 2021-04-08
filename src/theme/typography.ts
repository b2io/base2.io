import { atMinLg, atMinMd } from './breakpoints';
import { colors } from './colors';
import { cssClamp } from './util';

export const textVariants = {
  body: {
    color: colors.text,
    fontSize: '1.063rem',
    fontVariationSettings: '"wght" 500',
    letterSpacing: '0.006875rem',
    lineHeight: 1.65,

    [atMinMd]: {
      letterSpacing: 'normal',
    },
  },
  CTA: {
    color: colors.text,
    fontSize: cssClamp([1.125, 'xs'], [1.375, 'md']),
    fontVariationSettings: '"wght" 900',
    letterSpacing: cssClamp([0.006875, 'xs'], [0.125, 'lg']),
    lineHeight: 1.56,

    [atMinMd]: {
      fontSize: '1.375rem',
      lineHeight: 'normal',
    },
  },
  h1: {
    color: colors.text,
    fontSize: cssClamp([3.75, 'xs'], [6.25, 'lg']),
    fontVariationSettings: '"wght" 900',
    lineHeight: 1,
    letterSpacing: cssClamp([-0.03125, 'xs'], [0.125, 'lg']),
    margin: 0,
    padding: 0,

    [atMinMd]: {
      lineHeight: 1.04,
    },
  },
  h2: {
    color: colors.text,
    fontSize: cssClamp([2.5, 'xs'], [3.125, 'md']),
    fontVariationSettings: '"wght" 750',
    lineHeight: 1.1,
    letterSpacing: 'normal',
    margin: 0,
    padding: 0,

    [atMinMd]: {
      lineHeight: 1.2,
    },
  },
  h3: {
    color: colors.text,
    fontSize: '1.875rem',
    fontVariationSettings: '"wght" 400',
    lineHeight: 1.27,
    letterSpacing: 'normal',
    margin: 0,
    padding: 0,

    [atMinMd]: {
      lineHeight: 1.33,
    },
  },
  hero: {
    color: colors.text,
    fontSize: cssClamp([5, 'xs'], [10, 'md'], [15, 'lg']),
    fontVariationSettings: '"wght" 900',
    lineHeight: 0.53,
    letterSpacing: 'normal',
    margin: 0,
    padding: 0,

    [atMinMd]: {
      lineHeight: 0.74,
    },

    [atMinLg]: {
      lineHeight: 0.58,
    },
  },
};

export type ThemeTextVariants = keyof typeof textVariants;
