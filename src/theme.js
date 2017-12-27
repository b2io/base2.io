import { css } from 'styled-components';
import { lighten } from 'polished';

// COLOR:

const color = {
  base: 'rgb(0, 0, 0)',
  link: 'rgb(124, 177, 255)',
  linkHover: lighten(0.15, 'rgb(124, 177, 255)'),
  text: 'rgb(255, 255, 255)',
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

const theme = {
  color,
  motion,
  font,
};

export default theme;
