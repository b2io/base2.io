import styled from 'styled-components';
import { cssSome, themed } from '../../util/style';

const Button = styled.button`
  ${themed('font.sansSerif')};
  ${themed('button.default')};

  ${cssSome('block')`
    display: block;
    width: 100%;
  `};
`;

export default Button;
