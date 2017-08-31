import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colorOverlay } from '../helpers/colors';

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

  ${colorOverlay};
`;

GridItem.propTypes = {
  color: PropTypes.string,
  image: PropTypes.string,
};

export default GridItem;
