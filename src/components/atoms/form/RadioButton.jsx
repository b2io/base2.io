import React from 'react';
import styled from 'styled-components';
import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import { themed } from '../../../util/style';

const Label = styled.label`
  ${themed('typography.subheading')};
  color: ${themed('color.accent')};
  display: inline-block;
`;

const RadioInput = styled.input.attrs({
  type: 'radio',
})`
  margin-right: 0.5em;
`;

function RadioButton({ id, label, ...rest }) {
  return (
    <Label htmlFor={id}>
      <RadioInput {...rest} id={id} />
      {label}
    </Label>
  );
}
RadioButton.defaultProps = {
  id: nanoid(),
};

RadioButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node.isRequired,
};

export default RadioButton;
