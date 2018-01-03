import styled from 'styled-components';
import flow from 'lodash/fp/flow';
import { cssSome, lighten, mediaQuery, themed } from '../../util/style';

const Button = styled.button`
  ${themed('font.sansSerif')};
  background-color: ${themed('color.transparent')};
  border: 1px solid ${themed('color.link')};
  color: ${themed('color.link')};
  cursor: pointer;
  font-size: 1.5em;
  line-height: 1;
  outline: none;
  overflow: hidden;
  padding: 0.25em 0.5em;

  ${mediaQuery.small`
    font-size: 1.875em;
  `};

  ${mediaQuery.medium`
    font-size: 2.625em;
  `};

  ${cssSome('block')`
    display: block;
    width: 100%;
  `};

  ${cssSome('gradient')`
    border-radius: 0;
    border-style: solid;
    border-width: 1px 0;
    border-color: ${themed('color.primary')} transparent ${themed(
    'color.link',
  )};
    background-image:
      linear-gradient(${themed('color.primary')}, ${themed('color.link')}),
      linear-gradient(${themed('color.primary')}, ${themed('color.link')})
    ;
    background-size: 1px 100%;
    background-position:0 0, 100% 0;
    background-repeat: no-repeat;
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

    ${mediaQuery.small`
      font-size: 1.875em;
    `};
  `};

  &:focus,
  &:hover {
    background-color: ${themed('color.deepBlue')};
    color: ${themed('color.primary')};
  }

  &:active {
    background-color: ${flow(themed('color.primary'), lighten(0.2))};

    ${cssSome('submit')`
    background-color: ${flow(themed('color.deepBlue'), lighten(0.1))};
    `};
  }
`;

export default Button;
