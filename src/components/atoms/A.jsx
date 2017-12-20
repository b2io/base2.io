import styled from 'styled-components';
import { themed } from '../../util/style';

const A = styled.a`
  color: ${themed('color.link')};
  text-decoration: none;

  &:hover {
    color: ${themed('color.linkHover')};
  }
`;

export default A;
