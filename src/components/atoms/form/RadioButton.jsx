import React from 'react';
import nanoid from 'nanoid';
import FormField from './FormField';
import Label from './Label';
// import styled from 'styled-components';
// import { cssSome, themed } from '../../../util/style';

function RadioButton({ id = nanoid(), label, ...rest }) {
  return (
    <FormField>
      <input {...rest} id={id} type="radio" />
      <Label htmlFor={id}>{label}</Label>
    </FormField>
  );
}

export default RadioButton;
