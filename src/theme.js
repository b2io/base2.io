import { css } from 'styled-components';
import { lighten, rem, transparentize } from 'polished';

// COLOR:

const color = {
  base: 'rgb(0, 0, 0)',
  background: 'rgba(0, 0, 0, 1.0)',
  deepBlue: 'rgba(3, 8, 40, 1.0)',
  disabled: 'rgba(0, 0, 0, 0.38)',
  link: 'rgb(124, 177, 255)',
  linkHover: lighten(0.15, 'rgb(124, 177, 255)'),
  menu: 'rgb(153,153,153)',
  overlay: transparentize(0.7, 'rgb(0, 0, 0)'),
  primary: 'rgba(255, 255, 255, 1.0)',
  purple: 'rgba(106, 72, 153, 1.0)',
  spaceGreen: 'rgba(128, 203, 196, 1.0)',
  spaceBlue: 'rgba(124, 177, 255,1.0)',
  text: 'rgb(255, 255, 255)',
  transparent: 'rgba(0, 0, 0, 0.0)',
};

// MOTION:

const motion = {
  color: css`
    transition-duration: 85ms;
  `,
  size: css`
    transition-duration: 200ms;
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

// BUTTON:

const button = {
  default: css`
    background-color: ${color.base};
    background-image: linear-gradient(${color.primary}, ${color.spaceBlue}),
      linear-gradient(${color.primary}, ${color.spaceBlue});
    background-size: 1px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
    border-style: solid;
    border-width: 1px 0;
    border-color: ${color.primary} transparent ${color.spaceBlue};
    box-shadow: 0 0 10px ${color.spaceBlue};
    color: ${color.spaceBlue};
    cursor: pointer;
    font-size: 1.5em;
    line-height: 1;
    overflow: hidden;
    padding: ${rem('15px')} ${rem('120px')};
    text-transform: uppercase;

    &:focus,
    &:hover {
      background-color: ${color.deepBlue};
      color: ${color.primary};
    }

    &:active {
      background-color: ${lighten(0.1, color.deepBlue)};
    }
  `,
};

const theme = {
  color,
  motion,
  font,
  typography,
  button,
};

export default theme;
