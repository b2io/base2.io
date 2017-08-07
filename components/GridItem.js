import styled from 'styled-components';
import Colorfill from './Colorfill';

const GridItem = styled.div`
  background-image: url('${props => props.image}');
  background-position: top center;
  background-size: cover;
  display: inline-block;
  height: 50vh;
  margin-bottom: -4px;
  position: relative;
  width: 33.33vw;
  z-index: 0;

  * {
    position: absolute;
  }

  &:hover {
    &::after {
      opacity: 0;
      transition: all .3s ease-out;
    }
  }

  ${Colorfill};
`;

export default GridItem;
