import styled from 'styled-components';
import { em } from 'polished';
import { themed } from '../../util/style';

const Blockquote = styled.blockquote`
  border-left: ${em('10px')} solid ${themed('color.border')};
  font-size: 1.5em;
  line-height: 1.35;
  margin: 0;
  padding: ${em('10px')} ${em('40px')};
`;

export default Blockquote;
