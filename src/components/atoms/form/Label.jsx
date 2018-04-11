import styled from 'styled-components';
import { cssSome, themed } from '../../../util/style';

const Label = styled.label`
  ${themed('motion.size')};
  ${themed('typography.subheading')};
  bottom: 0;
  color: ${themed('color.accent')};
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
    top: 4px;
  `};

  ${cssSome('isDirty')`
    *:invalid + &::after {
      background: ${themed('color.error')};
      bottom: 0;
      box-sizing: border-box;
      color: ${themed('color.background')};
      height: 20px;
      padding: .25em .5em;
      position: absolute;
      right: 0;
    }

    [type="tel"]:invalid + &::after {
      content: 'Please enter a valid phone number.';
    }

    [type="email"]:invalid + &::after {
      content: 'Please enter a valid email address.';
    }

    *:invalid + & {
      color: ${themed('color.error')};
    }

    *:valid + & {
      color: ${themed('color.spaceGreen')};
    }
  `};

  *:required + &::before {
    color: inherit;
    content: '*Required';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    font-size: 0.75em;
  }
`;

export default Label;
