import React from 'react';
import PropTypes from 'prop-types';
import { A } from '../atoms';

function ScrollLink({ children, target, title }) {
  return (
    <A href={`/#${target}`} title={title}>
      {children}
    </A>
  );
}

ScrollLink.defaultProps = {};

ScrollLink.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ScrollLink;
