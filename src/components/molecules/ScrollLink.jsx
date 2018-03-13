import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { A } from '../atoms';

const ScrollTarget = styled(A)`
  display: inline-block;
`;

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
      <ScrollTarget href={`/#${target}`} title={title}>
        {children}
      </ScrollTarget>
    );
  }
}

export default ScrollLink;
