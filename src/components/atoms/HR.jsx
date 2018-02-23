import styled from 'styled-components';
import { themed } from '../../util/style';

const HR = styled.hr`
  border-color: ${themed('color.border')};
  border-style: dotted;
  border-width: 1px 0 0 0;
`;

export default HR;
