import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import Paragraph from './Paragraph';

const Text = ({children}) => {
  return (
      <Paragraph>
        <Emoji>
          {children}
        </Emoji>
      </Paragraph>
  )
};

export default Text;
