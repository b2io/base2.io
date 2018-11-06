import styled from 'styled-components';
import { em } from 'polished';
import { themed } from '../../util/style';

const Pre = styled.pre`
  ${themed('font.monospace')};
  background: ${themed('color.greyLight')};
  border: 1px solid ${themed('color.border')};
  overflow-x: scroll;
  padding: ${em('10px')};

  code {
    background: ${themed('color.transparent')};
  }
`;

export default Pre;
