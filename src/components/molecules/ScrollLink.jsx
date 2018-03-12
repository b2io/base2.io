import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { em } from 'polished';
import { A } from '../atoms';
import { mediaQuery } from '../../util/style';

const ScrollTarget = styled(A)`
  display: block;
`;

const SatelliteIndicator = styled.img`
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

const ArrowIndicator = styled.img`
  display: block;
  margin: 1em auto 0;
  max-width: ${em('21px')};

  ${mediaQuery.small`
    max-width: ${em('27px')};
  `};

  ${mediaQuery.large`
    max-width: ${em('43px')};
  `};
`;

// eslint-disable-next-line prefer-stateless-function
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
        <SatelliteIndicator src="img/scroll-indicator.svg" alt={title} />
        <ArrowIndicator src="img/scroll-arrows.svg" alt={title} />
      </ScrollTarget>
    );
  }
}

export default ScrollLink;
