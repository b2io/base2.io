export const bp = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};
export type Breakpoint = keyof typeof bp;

export const mq = (bp: number): string => `@media (min-width: ${bp}px)`;

export const atSm = mq(bp.sm);
export const atMd = mq(bp.md);
export const atLg = mq(bp.lg);
export const atXL = mq(bp.xl);
export const atXXL = mq(bp.xxl);
