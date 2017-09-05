import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

const TextWrapper = styled.span`
  color: ${props => props.color};
  font-family: var(--font, 'Roboto');
  font-size: 24px;
  font-weight: 100;
`;

const Text = props =>
  (<TextWrapper color={props.color}>
    <Emoji>
      {props.children}
    </Emoji>
  </TextWrapper>);

Text.defaultProps = {
  color: 'var(--color-fg, black)',
};

Text.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Text;
