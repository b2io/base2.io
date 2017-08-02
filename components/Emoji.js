import React from 'react';
import Emojify from 'react-emojione';
import styled from 'styled-components';

const Emoji = (props) => {
  return (
    <Emojify style={props.styles || {height: 20, top: -3, width: 20}}>
      {props.children}
    </Emojify>
  )
}

export default Emoji;
