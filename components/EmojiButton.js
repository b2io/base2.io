import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Emoji from './Emoji';

const EmojiButton = props =>
  (<Button {...props}>
    <Emoji styles={props.styles}>
      {props.children}
    </Emoji>
  </Button>);

EmojiButton.defaultProps = {
  styles: {
    height: 20,
    left: 4,
    margin: 0,
    top: -2,
    width: 20,
  },
};

EmojiButton.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.objectOf(PropTypes.number),
};

export default EmojiButton;
