import styled from 'styled-components';
import { em, rem } from 'polished';
import { themed } from '../../util/style';

const Blockquote = styled.blockquote`
  border-left: ${em('10px')} solid ${themed('color.border')};
  font-size: 1.5em;
  line-height: 1.35;
  margin: 0 0 ${rem('21px')};
  padding: ${em('10px')} ${em('40px')};
`;

export default Blockquote;
