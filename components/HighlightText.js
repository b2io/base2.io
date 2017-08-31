import styled from 'styled-components';
import PropTypes from 'prop-types';
import FullScreenSection from './FullScreenSection';
import { gradientBackground } from '../helpers/colors';

const HighlightText = styled.span`
  color: white;
  display: inline;
  font-size: ${props => props.size || 'calc(5vw + 3vmin)'};
  line-height: 130%;

  h1,
  h2,
  h3,
  p {
    background-color: ${props => props.color || 'black'};
    display: inline;
    font-size: 100%;
    font-weight: 900;
    ${gradientBackground};
  }

  ${FullScreenSection} & {
    margin-left: auto;
    margin-right: 16px;
    max-width: 60%;
  }
`;

HighlightText.propTypes = {
  color: PropTypes.string,
  gradient: PropTypes.string,
  size: PropTypes.string,
};

export default HighlightText;
