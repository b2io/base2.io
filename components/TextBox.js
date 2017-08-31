import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colorBackground } from '../helpers/colors';

const TextBox = styled.div`
  color: ${props => props.textColor || 'var(--color-fg, white)'};
  left: 10vw;
  padding: 3vw;
  position: absolute;
  top: -10vw;
  ${colorBackground};
`;

TextBox.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default TextBox;
