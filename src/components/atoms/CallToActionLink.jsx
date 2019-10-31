import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import { mediaQuery, themed } from '../../util/style';
import { em } from 'polished';

const CallToActionLink = styled(GatsbyLink)`
  ${themed('button.default')};
  display: inline-block;
  padding: ${em('10px')} ${em('13px')};
  text-decoration: none;
  text-transform: capitalize;

  ${mediaQuery.small`
    font-size: 1.875em;
  `};

  ${mediaQuery.large`
  font-size: 2.625em;
  `};
`;

export default CallToActionLink;
