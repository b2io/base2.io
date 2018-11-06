import { rem } from 'polished';
import styled, { css } from 'styled-components';
import { H2 as Heading2 } from '../../atoms';
import { mediaQuery, themed } from '../../../util/style';

const text = css`
  font-size: ${rem('18px')};
  line-height: 1.5;

  ${mediaQuery.small`
    font-size: ${props => (props.smallText ? rem('18px') : rem('20px'))};
  `};

  ${mediaQuery.medium`
    font-size: ${props => (props.smallText ? rem('18px') : rem('28px'))};
  `};
`;

const H2 = styled(Heading2)`
  color: ${themed('color.textAccent')};
  font-size: ${rem('20px')};
  font-weight: 100;
  margin: 0;

  ${mediaQuery.small`
    font-size: ${rem('24px')};
  `};

  ${mediaQuery.medium`
    font-size: ${rem('36px')};
  `};
`;

const P = styled.p`
  ${text};
`;

const LI = styled.li`
  ${text};
`;

export { H2, P, LI };
