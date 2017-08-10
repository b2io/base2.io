import React from 'react';
import PropTypes from 'prop-types';
import Emojify from 'react-emojione';

const Emoji = props =>
  <Emojify style={props.styles}>
    {props.children}
  </Emojify>;

Emoji.defaultProps = {
  styles: {
    height: 20,
    top: -3,
    width: 20,
  },
};

Emoji.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.objectOf(PropTypes.number),
};

export default Emoji;
