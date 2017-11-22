import noop from 'lodash/noop';
import nanoid from 'nanoid';
import React from 'react';
import styled from 'styled-components';
import { cssSome, themed } from '../../util/style';

const FormField = styled.div`
  display: block;
  margin: 0;
  max-width: 100%;
  padding: 20px 0;
  position: relative;
`;

const Input = styled.input`
  background: 0 0;
  border: none;
  border-bottom: 1px solid ${themed('color.divider')};
  color: inherit;
  display: block;
  margin: 0;
  outline: none;
  padding: 4px 0;
  text-align: left;
  width: 100%;
`;

const TextArea = Input.withComponent('textarea').extend`
  resize: vertical;
`;

const Label = styled.label`
  ${themed('motion.size')};
  ${themed('typography.subheading')};
  bottom: 0;
  color: ${themed('color.disabled')};
  display: block;
  left: 0;
  line-height: 1;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: left;
  top: 24px;
  white-space: nowrap;
  width: 100%;

  ${cssSome('isDirty', 'isFocused')`
    ${themed('typography.caption')};
    color: ${themed('color.primary')};
    top: 4px;
  `};

  &::after {
    ${themed('motion.size')};
    background-color: ${themed('color.primary')};
    bottom: 20px;
    content: '';
    height: 2px;
    left: 45%;
    position: absolute;
    visibility: hidden;
    width: 10px;
  }

  ${cssSome('isFocused')`
    &::after {
      left: 0;
      visibility: visible;
      width: 100%;
    }
  `};
`;

class TextField extends React.Component {
  static defaultProps = {
    multiline: false,
    onBlur: noop,
    onChange: noop,
    onFocus: noop,
    type: 'text',
  };

  state = {
    isDirty: !!this.props.value,
    isFocused: false,
  };

  handleBlur = event => {
    this.props.onBlur(event);
    this.setState({ isFocused: false });
  };

  handleChange = event => {
    this.props.onChange(event);
    this.setState({ isDirty: !!event.target.value });
  };

  handleFocus = event => {
    this.props.onFocus(event);
    this.setState({ isFocused: true });
  };

  render() {
    const { id = nanoid(), label, multiline, ...rest } = this.props;
    const InputEl = multiline ? TextArea : Input;

    return (
      <FormField {...this.state}>
        <InputEl
          {...rest}
          {...this.state}
          id={id}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
        />
        <Label {...this.state} htmlFor={id}>
          {label}
        </Label>
      </FormField>
    );
  }
}

export { TextField };
