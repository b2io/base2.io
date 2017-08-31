import styled from 'styled-components';
import FullScreenSection from './FullScreenSection';
import Paragraph from './Paragraph';

const Button = styled.button`
  background-color: transparent;
  border: 2px solid var(--color-fg, black);
  border-radius: 4px;
  color: var(--color-fg, black);
  font-size: 1.25em;
  font-family: var(--font, 'Roboto');
  font-weight: 400;
  cursor: pointer;
  outline: none;
  padding: .5em 1.25em;
  min-width: 120px;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 0px 1px var(--color-fg, black);
  }

  &:active {
    box-shadow: none;
  }

  ${FullScreenSection} & {
    border: 1px solid rgba(255, 255, 255, .5);
    color: var(--color-fg, white);
    display: block;
    font-weight: 100;

    &:hover {
      background: rgba(255, 255, 255, .2);
      box-shadow: 0px 0px 0px 1px var(--color-fg, white);
    }

    &:active {
      box-shadow: none;
    }
  }

  ${Paragraph} & {
    font-size: 1em;
    line-height: 1em;
  }
`;

export default Button;
