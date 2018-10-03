import styled from 'styled-components';
import { em } from 'polished';
import { themed } from '../../util/style';

const Code = styled.code`
  ${themed('font.monospace')};
  background: ${themed('color.greyLight')};
  padding: 0 ${em('2px')};
`;

export default Code;
