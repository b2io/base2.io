import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colorOverlay } from '../helpers/colors';

const FullScreenSection = styled.section`
  align-items: center;
  background-image: url('${props => props.image}');
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: ${props => props.height || 100}vmin;
  justifty-content: center;
  margin: 0;
  min-height: 30vw;
  overflow: visible;
  position: relative;
  transition: all .3s ease-out;
  width: 100vw;
  z-index: 0;

  @media (min-width: 1500px) {
    height: ${props => `calc(${props.height}vh * 1.25)` || '150vh'};
  }

  ${props => (props.color || props.gradient ? colorOverlay : null)}
`;

FullScreenSection.propTypes = {
  color: PropTypes.string,
  gradient: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
};

export default FullScreenSection;
