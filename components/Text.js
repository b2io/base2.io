import React from 'react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';
import Paragraph from './Paragraph';

const Text = props =>
  (<Paragraph>
    <Emoji>
      {props.children}
    </Emoji>
  </Paragraph>);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
