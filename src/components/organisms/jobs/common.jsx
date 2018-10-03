import { em } from 'polished';
import styled, { css } from 'styled-components';
import { H2 as Heading2 } from '../../atoms';
import { containerSizing, mediaQuery } from '../../../util/style';

const text = css`
  font-size: ${em('18px')};
  line-height: 1.35;

  ${mediaQuery.small`
    font-size: ${em('28px')};
  `};

  ${mediaQuery.medium`
    font-size: ${em('36px')};
  `};
`;

const H2 = styled(Heading2).attrs({ dark: true })`
  font-size: ${em('24px')};

  ${mediaQuery.medium`
    font-size: ${em('48px')};
  `};
`;

const P = styled.p`
  ${text};
`;

const LI = styled.li`
  ${text};
`;

const Wrapper = styled.main`
  ${containerSizing};
`;

export { H2, P, LI, Wrapper };
