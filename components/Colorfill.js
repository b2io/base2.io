import styled, { css } from 'styled-components';

const Colorfill = css`
  &::after {
    ${props => props.gradient == 'dusk' ? '--color-gradient1: #2C3E50; --color-gradient2: #FD746C;' : null};
    ${props => props.gradient == 'firewatch' ? '--color-gradient1: #cb2d3e; --color-gradient2: #ef473a;' : null};
    ${props => props.gradient == 'haikus' ? '--color-gradient1: #fd746c; --color-gradient2: #f44336;' : null};
    ${props => props.gradient == 'sulphur' ? '--color-gradient1: #CAC531; --color-gradient2: #F3F9A7;' : null};
    ${props => props.color == true ? '--color-bg: black;' : `--color-bg: ${props.color}`};
    ${props => props.gradient ? 'background-image: linear-gradient(to right, var(--color-gradient1, white), var(--color-gradient2, black))' : null};
    background-color: ${props => props.color ? 'var(--color-bg, black)' : 'transparent'};
    content: '';
    height: 100%;
    opacity: ${props => props.image ? .5 : 1};
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`;

export default Colorfill;
