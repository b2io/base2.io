import styled from 'styled-components';
import { FullScreenSection } from './';

const TextBox = styled.div`
  background-color: var(--color-bg, black);
  color: var(--color-fg, white);
  padding: 30px 0;

  ${FullScreenSection} & {
    max-width: 30%;
  }
`;

export default TextBox;
