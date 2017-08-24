import React from 'react';
import PropTypes from 'prop-types';
import { Emoji, Paragraph } from './';

const Text = props =>
  <Paragraph>
    <Emoji>
      {props.children}
    </Emoji>
  </Paragraph>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
