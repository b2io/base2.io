import styled from 'styled-components';
import flow from 'lodash/fp/flow';
import { readableColor } from 'polished';
import { cssSome, lighten, themed } from '../../util/style';

const Button = styled.button`
  ${themed('motion.color')};
  ${themed('typography.button')};
  background-color: ${themed('color.background')};
  border: 2px solid #80cbc4;
  border-radius: 2px;
  color: ${flow(themed('color.primary'), readableColor)};
  cursor: pointer;
  outline: none;
  overflow: hidden;
  padding: 0 16px;
  position: relative;

  ${cssSome('block')`
    display: block;
    width: 100%;
  `};

  ${cssSome('submit')`
    background-color: ${themed('color.transparent')};
    border: 2px solid linear-gradient(to bottom, #ffffff, ${themed(
      'color.spaceBlue',
    )}) 1 100%,
    border-radius: 2px;
    color: ${themed('color.spaceBlue')};
    display: block;
    font-weight: 400;
    font-size: 1.25em;
    width: 330px;
    height: 50px;
    text-transform: uppercase;
  `};

  &:focus,
  &:hover {
    background-color: ${flow(themed('color.primary'), lighten(0.1))};

    ${cssSome('submit')`
      background-color: ${themed('color.deepBlue')};
      color: ${themed('color.primary')};
    `};
  }

  &:active {
    background-color: ${flow(themed('color.primary'), lighten(0.2))};

    ${cssSome('submit')`
    background-color: ${flow(themed('color.deepBlue'), lighten(0.1))};
    `};
  }
`;

export default Button;
