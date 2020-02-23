import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { themed } from '../../../util/style';

const Label = styled.label`
  ${themed('typography.subheading')};
  color: ${themed('color.accent')};
  display: inline-block;
  margin-right: 1em;
`;

const RadioInput = styled.input.attrs({
  type: 'radio',
})`
  margin-right: 0.5em;
`;

function RadioButton({ id = nanoid(), label, ...rest }) {
  return (
    <Label htmlFor={id}>
      <RadioInput {...rest} id={id} />
      {label}
    </Label>
  );
}

RadioButton.defaultProps = {
  id: undefined,
};

RadioButton.propTypes = {
  label: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export default RadioButton;
