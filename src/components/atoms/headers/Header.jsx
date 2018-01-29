import styled from 'styled-components';
import { mediaQuery } from '../../../util/style';

const Header = styled.header`
  padding: 0 5%;

  ${mediaQuery.medium`
    padding: 0 2em;
  `};

  ${mediaQuery.large`
    padding: 0 100px;
  `};
`;

export default Header;
