import { css } from 'styled-components';

const color = {
  black: '#000',
  white: '#fff',
  blue: '#0db2ff',
  purple: '#a044ff',
  red: '#f50b4e',
  yellow: '#dfc519',
};

const gradient = {
  dusk: '--color-gradient1: #2C3E50; --color-gradient2: #FD746C;',
  firewatch: '--color-gradient1: #cb2d3e; --color-gradient2: #ef473a;',
  haikus: '--color-gradient1: #fd746c; --color-gradient2: #f44336;',
  sulphur: '--color-gradient1: #CAC531; --color-gradient2: #F3F9A7;',
};

const colorBackground = css`
  ${props =>
    props.color === true ? '--color-bg: black;' : `--color-bg: ${props.color}`};
  background-color: ${props =>
    props.color ? 'var(--color-bg, black)' : 'transparent'};
`;

const gradientBackground = css`
${props => (props.gradient ? props.gradient : null)};
${props =>
  props.gradient
    ? 'background-image: linear-gradient(to right, var(--color-gradient1, white), var(--color-gradient2, black))'
    : null};
`;

const colorOverlay = css`
  &::after {
    ${gradientBackground};
    ${colorBackground};
    bottom: 0;
    content: '';
    left: 0;
    opacity: ${props => (props.image ? 0.5 : 1)};
    position: absolute;
    right: 0;
    top: 0;
    z-index: -2;
  }
`;

module.exports = {
  color,
  colorBackground,
  colorOverlay,
  gradient,
  gradientBackground,
};
