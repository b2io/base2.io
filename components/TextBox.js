import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';
import { colorBackground, gradientBackground } from '../helpers/colors';

const Box = styled.div`
  color: ${props => props.textColor};
  margin: auto;
  max-width: 20%;
  min-width: 150px;
  padding: 5vmin;
  ${colorBackground};
  ${gradientBackground};
`;

const TextBox = props =>
  (<Box color={props.color} gradient={props.gradient}>
    <Text color={props.textColor}>
      {props.children}
    </Text>
  </Box>);

TextBox.defaultProps = {
  color: 'var(--color-bg, black)',
  gradient: null,
  textColor: 'var(--color-fg, white)',
};

TextBox.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  gradient: PropTypes.string,
  textColor: PropTypes.string,
};

export default TextBox;
