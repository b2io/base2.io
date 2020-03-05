import styled from 'styled-components';
import { themed } from '../../util/style';

const Main = styled.main`
  background: ${themed('color.background')};
  color: ${themed('color.text')};
  z-index: ${themed('zindex.background')};
  display: block;
  overflow: hidden;
  position: relative;
`;

export default Main;
