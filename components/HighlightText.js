import styled from 'styled-components';
import PropTypes from 'prop-types';
import { gradientBackground } from '../helpers/colors';

const HighlightText = styled.span`
  color: white;
  display: inline;
  font-size: ${props => props.size || 'calc(5vw + 3vmin)'};
  line-height: 130%;
  margin: auto;
  max-width: 60%;

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
`;

HighlightText.propTypes = {
  color: PropTypes.string,
  gradient: PropTypes.string,
  size: PropTypes.string,
};

export default HighlightText;
