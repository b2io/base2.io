import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import { themed } from '../../util/style';

const Link = styled(GatsbyLink)`
  color: ${themed('color.link')};
  text-decoration: none;

  &:hover {
    color: ${themed('color.linkHover')};
  }
`;

export default Link;
