import styled from 'styled-components';
import { cssSome, themed } from '../../../util/style';

const Label = styled.label`
  ${themed('motion.size')};
  ${themed('typography.subheading')};
  bottom: 0;
  color: ${themed('color.primary')};
  display: block;
  left: 0;
  line-height: 1;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: left;
  top: 24px;
  white-space: nowrap;
  width: 100%;

  ${cssSome('isDirty', 'isFocused')`
  ${themed('typography.caption')};
    color: ${themed('color.primary')};
    top: 4px;
  `};

  &::after {
    ${themed('motion.size')};
    background-color: ${themed('color.spaceGreen')};
    bottom: 20px;
    content: '';
    height: 1px;
    left: 45%;
    position: absolute;
    visibility: hidden;
    width: 10px;
  }

  ${cssSome('isFocused')`
  &::after {
  left: 0;
  visibility: visible;
  width: 100%;
  }
  `};
`;

export default Label;
