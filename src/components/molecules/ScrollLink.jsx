import React from 'react';
import PropTypes from 'prop-types';
import { A } from '../atoms';

// eslint-disable-line react/prefer-stateless-function
class ScrollLink extends React.Component {
  static defaultProps = {};

  static propTypes = {
    children: PropTypes.node.isRequired,
    target: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, target, title } = this.props;

    return (
      <A href={`/#${target}`} title={title}>
        {children}
      </A>
    );
  }
}

export default ScrollLink;
