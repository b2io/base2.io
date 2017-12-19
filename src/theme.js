import { css } from 'styled-components';

// COLOR:

const color = {
  base: '#333',
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
  `,
};

const theme = {
  color,
  motion,
  font,
};

export default theme;
