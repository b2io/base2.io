import React from 'react';
import styled from 'styled-components';
import nanoid from 'nanoid';
import FormField from './FormField';

const Label = styled.label`
  display: block;
`;

const RadioInput = styled.input.attrs({
  type: 'radio',
})`
  margin-right: 0.5em;
`;

function RadioButton({ id = nanoid(), label, ...rest }) {
  return (
    <FormField>
      <Label htmlFor={id}>
        <RadioInput {...rest} id={id} />
        {label}
      </Label>
    </FormField>
  );
}

export default RadioButton;
