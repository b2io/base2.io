import styled from 'styled-components';
import { cssSome, themed } from '../../../util/style';

const Input = styled.input`
  background: 0 0;
  border: none;
  border-bottom: 1px solid ${themed('color.spaceBlue')};
  box-shadow: none;
  color: ${themed('color.text')};
  display: block;
  font-size: 1em;
  margin: 0;
  padding: 4px 0;
  text-align: left;
  width: 100%;

  ${cssSome('isDirty', 'isFocused')`
    &:valid {
      border-bottom: 1px solid ${themed('color.spaceGreen')};
    }
  `};
`;

export default Input;
