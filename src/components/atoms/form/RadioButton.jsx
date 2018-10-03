import React from 'react';
import nanoid from 'nanoid';
import FormField from './FormField';
// import styled from 'styled-components';
// import { cssSome, themed } from '../../../util/style';

function RadioButton({ id = nanoid(), label, ...rest }) {
  return (
    <FormField>
      <label htmlFor={id}>
        <input {...rest} id={id} type="radio" />
        {label}
      </label>
    </FormField>
  );
}

export default RadioButton;
