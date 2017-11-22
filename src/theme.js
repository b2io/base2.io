import { css } from 'styled-components';

// COLOR:

const color = {
  appBar: '#f5f5f5',
  background: '#fafafa',
  dialog: '#ffffff',
  disabled: 'rgba(0, 0, 0, 0.38)',
  divider: 'rgba(0, 0, 0, 0.12)',
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.54)',
  statusBar: '#e0e0e0',
};

// MOTION:

const motion = {
  color: css`
    transition-duration: 85ms;
    transition-timing-fuction: linear;
  `,
  size: css`
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  `,
};

// TYPOGRAPHY:

const BASE_FONT_SIZE = 14;
const FONT_FAMILY = '"Roboto", "Helvetica", "Arial", sans-serif';

const typography = {
  display4: css`
    font-family: ${FONT_FAMILY};
    font-size: 112px;
    font-weight: 300;
    letter-spacing: -0.04em;
    line-height: 1;
  `,
  display3: css`
    font-family: ${FONT_FAMILY};
    font-size: 56px;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.35;
  `,
  display2: css`
    font-family: ${FONT_FAMILY};
    font-size: 45px;
    font-weight: 400;
    line-height: 48px;
  `,
  display1: css`
    font-family: ${FONT_FAMILY};
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
  `,
  headline: css`
    font-family: ${FONT_FAMILY};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
  `,
  title: css`
    font-family: ${FONT_FAMILY};
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1;
  `,
  subheading: css`
    font-family: ${FONT_FAMILY};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  `,
  body2: css`
    font-family: ${FONT_FAMILY};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  `,
  body1: css`
    font-family: ${FONT_FAMILY};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `,
  caption: css`
    font-family: ${FONT_FAMILY};
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
  `,
  button: css`
    font-family: ${FONT_FAMILY};
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    text-transform: uppercase;
  `,
};

const theme = {
  color,
  motion,
  typography,
};

export default theme;