import styled from 'styled-components';
import Colorfill from './Colorfill';

const FullScreenSection = styled.section`
  align-items: center;
  background-image: url('${props => props.image}');
  background-position: top right;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justifty-content: center;
  margin: 0;
  overflow: hidden;
  position: relative;
  width: 100vw;
  z-index: 0;

  * {
    max-width: 50%;
    margin: auto;
  }

  ${Colorfill};
`;

export default FullScreenSection;
