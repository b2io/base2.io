import styled from 'styled-components';
import { FullScreenSection } from './';

const HighlightText = styled.div`
  color: white;
  display: inline;
  font-size: calc(5vw + 5vmin);
  line-height: 130%;

  h1,
  h2,
  h3,
  p {
    background-color: ${props => props.color || 'black'};
    display: inline;
    font-size: 100%;
    font-weight: 900;
  }

  ${FullScreenSection} & {
    margin-left: auto;
    max-width: 60%;
  }
`;

export default HighlightText;
