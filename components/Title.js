import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  color: var(--color-fg, black);
  display: block;
  font-family: var(--font, sans-serif);
  font-size: ${props => (props.small ? '32px' : 'calc(2.5vw + 5vmin)')};
  font-weight: 100;
  margin-top: 0;
  text-transform: none;
  width: 100%;
`;

Title.propTypes = {
  small: PropTypes.bool,
};

export default Title;
