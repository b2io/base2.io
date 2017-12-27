import { css } from 'styled-components';
import { lighten } from 'polished';

// COLOR:

const color = {
  base: 'rgb(0, 0, 0)',
  background: 'rgba(0, 0, 0, 1.0)',
  deepBlue: 'rgba(3, 8, 40, 1.0)',
  disabled: 'rgba(0, 0, 0, 0.38)',
  link: 'rgb(124, 177, 255)',
  linkHover: lighten(0.15, 'rgb(124, 177, 255)'),
  primary: 'rgba(255, 255, 255, 1.0)',
  spaceGreen: 'rgba(128,203,196, 1.0)',
  spaceBlue: 'rgba(124,177,255,1.0)',
  text: 'rgb(255, 255, 255)',
  transparent: 'rgba(0, 0, 0, 0.0)',
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

// FONT:

const font = {
  sansSerif: css`
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 100;
  `,
};

const typography = {
  subheading: css`
    font-family: ${font};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  `,
  caption: css`
    font-family: ${font};
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
  `,
};

const theme = {
  color,
  motion,
  font,
  typography,
};

export default theme;
