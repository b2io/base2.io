import styled from 'styled-components';
import { mediaQuery } from '../../../util/style';

const H1 = styled.h1`
  font-size: 3.25em;
  font-weight: 100;
  text-transform: capitalize;

  ${mediaQuery.medium`
    font-size: 4em;
  `};
`;

const H2 = styled.h2`
  font-size: 2em;
  font-weight: 100;
  text-transform: capitalize;

  ${mediaQuery.medium`
    font-size: 3em;
  `};
`;

/* stylelint-disable */
// TODO: add styles, remove stylelint-disable
const H3 = styled.h3``;

const H4 = styled.h4``;

const H5 = styled.h5``;

export { H1, H2, H3, H4, H5 };
