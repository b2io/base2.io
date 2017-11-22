import { modularScale } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { cssSome, themed } from '../../util/style';

const H1 = styled.h1`
  ${themed('typography.display4')};
  color: ${themed('color.primary')};
  margin: 0.5em 0;

  &:first-child {
    margin-top: 0;
  }
`;

const H2 = styled.h2`
  ${themed('typography.display3')};
  color: ${themed('color.primary')};
  margin: 0.5em 0;

  &:first-child {
    margin-top: 0;
  }
`;

const H3 = styled.h3`
  ${themed('typography.display2')};
  color: ${themed('color.primary')};
  margin: 0.5em 0;

  &:first-child {
    margin-top: 0;
  }
`;

const H4 = styled.h4`
  ${themed('typography.display1')};
  color: ${themed('color.primary')};
  margin: 0.5em 0;

  &:first-child {
    margin-top: 0;
  }
`;

const P = styled.p`
  ${themed('typography.body1')};
  color: ${themed('color.primary')};
  margin: 1em 0;

  &:first-child {
    margin-top: 0;
  }

  ${cssSome('lead')`
    ${themed('typography.headline')};
  `};
`;

export { H1, H2, H3, H4, P };
