import flow from 'lodash/flow';
import { readableColor } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { cssSome, lighten, themed } from '../../util/style';

const A = styled.a`
  ${themed('motion.color')};
  ${themed('typography.body1')};
  color: ${themed('color.primary')};
  font-style: normal;
  border-bottom: 1px dotted ${themed('color.divider')};
  text-decoration: none;

  &:hover {
    border-color: ${themed('color.primary')};
  }
`;

const Button = styled.button`
  ${themed('motion.color')};
  ${themed('typography.button')};
  background-color: ${themed('color.primary')};
  border: none;
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

  &:focus,
  &:hover {
    background-color: ${flow(themed('color.primary'), lighten(0.1))};
  }

  &:active {
    background-color: ${flow(themed('color.primary'), lighten(0.2))};
  }
`;

export { A, Button };
