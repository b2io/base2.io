import styled from 'styled-components';
import { rem } from 'polished';
import { themed, mediaQuery } from '../../util/style';

const CallToAction = styled.a`
  ${themed('button.default')};
  display: inline-block;
  padding: ${rem('15px')} ${rem('20px')};
  text-decoration: none;
  text-transform: capitalize;

  ${mediaQuery.small`
    font-size: 1.875em;
  `};

  ${mediaQuery.large`
    font-size: 2.625em;
  `};
`;

export default CallToAction;
