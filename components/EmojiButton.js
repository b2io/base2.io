import React from 'react';
import Emoji from './Emoji';
import Button from './Button';

const EmojiButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Emoji styles={{left: 4, margin: 0, height: 20, width: 20, top: -2}}>
        {props.children}
      </Emoji>
    </Button>
  )
}

export default EmojiButton;
