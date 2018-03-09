import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  A,
  Img
 } from '../atoms';
import { mediaQuery } from '../../util/style';

const ScrollTarget = styled(A)`
  display: block;
`;

const ScrollIndicator = styled(Img)`
  margin-top: 0.5em;
  width: 3em;

  ${mediaQuery.xsmall`
    position: absolute;
    left: calc(50% - 21px);
    bottom: 15px;
    width: 42px;
  `};

  ${mediaQuery.small`
    position: relative;
    width: 4em;
  `};

  ${mediaQuery.medium`
    margin-top: 0.75em;
  `};

  ${mediaQuery.medium`
    margin-top: 0.5em;
  `};
`;

class ScrollLink extends React.Component {
  static defaultProps = {};

  static propTypes = {
    target: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { target, title } = this.props;

    return (
      <ScrollTarget href={`/#${target}`} title={title}>
        <ScrollIndicator src="img/scroll-indicator.svg" alt={title} />
      </ScrollTarget>
    );
  }
}

export default ScrollLink;
