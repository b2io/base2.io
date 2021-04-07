import * as BP from '~/breakpoints';
import { colors } from './colors';

export const textVariants = {
  body: {
    color: colors.text,
    fontSize: '1.063rem',
    fontVariationSettings: '"wght" 500',
    letterSpacing: '0.006875rem',
    lineHeight: 1.65,

    [BP.atMinMd]: {
      letterSpacing: 'normal',
    },
  },
  CTA: {
    color: colors.text,
    fontSize: '1.125rem',
    fontVariationSettings: '"wght" 900',
    letterSpacing: '0.006875rem',
    lineHeight: 1.56,

    [BP.atMinMd]: {
      fontSize: '1.375rem',
      letterSpacing: 'normal',
      lineHeight: 'normal',
    },
  },
  h1: {
    color: colors.text,
    fontSize: '3.75rem',
    fontVariationSettings: '"wght" 900',
    lineHeight: 1,
    letterSpacing: '-0.03125rem',
    margin: 0,
    padding: 0,

    [BP.atMinMd]: {
      fontSize: '6.25rem',
      letterSpacing: 'normal',
      lineHeight: 1.04,
    },
  },
  h2: {
    color: colors.text,
    fontSize: '2.5rem',
    fontVariationSettings: '"wght" 750',
    lineHeight: 1.1,
    letterSpacing: 'normal',
    margin: 0,
    padding: 0,

    [BP.atMinMd]: {
      fontSize: '3.125rem',
      letterSpacing: 'normal',
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

    [BP.atMinMd]: {
      lineHeight: 1.33,
    },
  },
  hero: {
    color: colors.text,
    fontSize: '5rem',
    fontVariationSettings: '"wght" 900',
    lineHeight: 0.53,
    letterSpacing: 'normal',
    margin: 0,
    padding: 0,

    [BP.atMinMd]: {
      fontSize: '10rem',
      lineHeight: 0.74,
    },

    [BP.atMinLg]: {
      fontSize: '15rem',
      lineHeight: 0.58,
    },
  },
};

export type ThemeTextVariants = keyof typeof textVariants;
