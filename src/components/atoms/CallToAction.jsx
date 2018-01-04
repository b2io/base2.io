import styled from 'styled-components';
import { rem } from 'polished';
import { themed } from '../../util/style';

const CallToAction = styled.a`
  ${themed('button.default')};
  display: inline-block;
  font-size: 2em;
  margin: 0 auto;
  padding: ${rem('15px')} ${rem('20px')};
  text-decoration: none;
  text-transform: capitalize;
`;

export default CallToAction;
