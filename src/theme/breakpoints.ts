/* eslint-disable sort-keys */
// NOTE: May want to eventually restrict to (screen) and customize for (print)

export type Breakpoint = 0 | 320 | 375 | 576 | 768 | 992 | 1200 | 1400 | 1600;

export type BreakpointName = keyof typeof bp;

export interface BreakpointMap {
  xs: Breakpoint;
  smMobile: Breakpoint;
  mobile: Breakpoint;
  sm: Breakpoint;
  tablet: Breakpoint;
  lg: Breakpoint;
  xl: Breakpoint;
  xxl: Breakpoint;
  desktop: Breakpoint;
}

export const bp: BreakpointMap = {
  xs: 0,
  smMobile: 320,
  mobile: 375,
  sm: 576,
  tablet: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  desktop: 1600,
};

export const viewMaxWidth = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1440px',
};

/* -------------------------------------------------------------------------- *
 * (min-width) typically Mobile-First — Mobile as Default
 * -------------------------------------------------------------------------- */

export const minMQ = (bp: number): string => `@media (min-width: ${bp}px)`;

export const atMinMobile = minMQ(bp.mobile);
export const atMinSm = minMQ(bp.sm);
export const atMinTablet = minMQ(bp.tablet);
export const atMinLg = minMQ(bp.lg);
export const atMinXL = minMQ(bp.xl);
export const atMinXXL = minMQ(bp.xxl);
export const atMinDesktop = minMQ(bp.desktop);

/* -------------------------------------------------------------------------- *
 * (max-width) typically Desktop-First — Desktop as Default
 *
 * Work around limitations of min-max-prefixes with fractional values
 * https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * -------------------------------------------------------------------------- */

export const maxMQ = (bp: number): string =>
  `@media (max-width: ${bp - 0.02}px)`;

export const atMaxSm = maxMQ(bp.sm);
export const atMaxMd = maxMQ(bp.tablet);
export const atMaxLg = maxMQ(bp.lg);
export const atMaxXL = maxMQ(bp.xl);
export const atMaxXXL = maxMQ(bp.xxl);

/* -------------------------------------------------------------------------- *
 * Target Isolated Range
 * -------------------------------------------------------------------------- */

export const rangeMQ = (minBP: number, maxBP: number): string =>
  `@media (min-width: ${minBP}px) and (max-width: ${maxBP - 0.02}px)`;
