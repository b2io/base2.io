import styled from 'styled-components';
import { cssSome, mediaQuery, themed } from '../../util/style';

const Button = styled.button`
  ${themed('font.sansSerif')};
  ${themed('button.default')};

  ${cssSome('block')`
    display: block;
    width: 100%;
  `};

  ${cssSome('submit')`
    font-size: 1.25em;

    ${mediaQuery.small`
      font-size: 1.875em;
    `};
  `};
`;

export default Button;
