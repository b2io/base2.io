import styled from 'styled-components';
import { cssSome, themed } from '../../../util/style';

const Input = styled.input`
  background: 0 0;
  border: none;
  border-bottom: 1px solid ${themed('color.accent')};
  color: ${themed('color.text')};
  display: block;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  width: 100%;

  ${cssSome('isDirty', 'isFocused')`
    box-shadow: 0 1px 0 0 ${themed('color.accent')};
  `};
`;

export default Input;
