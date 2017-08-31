import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Shape = styled.svg`
  bottom: ${props => (props.side === 'bottom' ? 0 : 'auto')};
  fill: ${props => props.color};
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: ${props => (props.side === 'top' ? 0 : 'auto')};
  width: 100vw;
  z-index: -1;
`;

const EdgeShape = props =>
  (<Shape
    color={props.color}
    side={props.side}
    viewBox={props.shape.viewBox}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points={props.shape.points} />
  </Shape>);

EdgeShape.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.shape({
    points: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
  }).isRequired,
  side: PropTypes.string.isRequired,
};

export default EdgeShape;
