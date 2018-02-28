import styled from 'styled-components';
import { em } from 'polished';
import { H2 } from './headings';
import { mediaQuery, themed } from '../../../util/style';

const TwoToneHeading = styled(H2)`
  color: ${themed('color.textAccent')};
  font-size: ${em('42px')};
  font-style: italic;
  margin: 0;

  span {
    color: ${themed('color.text')};
  }

  ${mediaQuery.small`
    font-size: ${em('48px')};
  `};

  ${mediaQuery.medium`
    font-size: ${em('72px')};
  `};
`;

export default TwoToneHeading;
