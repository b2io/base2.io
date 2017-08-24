import styled from 'styled-components';
import { colorFill } from '../util/colors';

const FullScreenSection = styled.section`
  align-items: center;
  background-image: url('${props => props.image}');
  background-position: top right;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: ${props => props.height || 100}vmin;
  justifty-content: center;
  margin: 0;
  overflow: hidden;
  position: relative;
  transition: all .3s ease-out;
  width: 100vw;
  z-index: 0;

  @media (min-width: 1500px) {
    height: ${props => `calc(${props.height}vh * 1.25)` || '150vh'};
  }

  ${colorFill};
`;

export default FullScreenSection;
