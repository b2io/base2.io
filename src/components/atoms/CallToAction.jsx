import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import { em } from 'polished';
import { themed, mediaQuery } from '../../util/style';

const Link = ({ children, to, ...props }) => {
  const isInternal = /^\/(?!\/)/.test(to);
  return isInternal ? (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  ) : (
    <a href={to} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const CallToAction = styled(Link)`
  ${themed('button.default')};
  display: inline-block;
  padding: ${em('10px')} ${em('13px')};
  text-decoration: none;
  text-transform: capitalize;

  ${mediaQuery.small`
    font-size: 1.875em;
  `};

  ${mediaQuery.large`
    font-size: 2.625em;
  `};
`;

export default CallToAction;
