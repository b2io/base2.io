import React from 'react';
import PropTypes from 'prop-types';
import { em } from 'polished';
import styled, { css } from 'styled-components';
import { H2 as Heading2 } from '../../atoms';
import { containerSizing, mediaQuery } from '../../../util/style';

const text = css`
  font-size: ${em('18px')};
  line-height: 1.35;

  ${mediaQuery.small`
    font-size: ${em('20px')};
  `};

  ${mediaQuery.medium`
    font-size: ${em('28px')};
  `};
`;

const H2 = ({ children }) => <Heading2 dark>{children}</Heading2>;
H2.propTypes = {
  children: PropTypes.node.isRequired,
};

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
