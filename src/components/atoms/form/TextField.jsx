import noop from 'lodash/noop';
import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React from 'react';
import FormField from './FormField';
import Input from './Input';
import Label from './Label';
import Textarea from './Textarea';

const stateUpdateFromValue = ({ value }) => ({ value, isDirty: !!value });
const floatLabel = ({ type }) => type === 'file';

class TextField extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    ...stateUpdateFromValue(this.props),
    floatLabel: floatLabel(this.props),
    isFocused: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.label !== prevState.floatLabel) {
      return { floatLabel: nextProps.label };
    }
    return null;
  }

  handleBlur = event => {
    const { onBlur } = this.props;

    onBlur(event);
    this.setState({ isFocused: false });
  };

  handleChange = event => {
    const { onChange } = this.props;

    this.setState(stateUpdateFromValue(event.target), onChange(event));
  };

  handleFocus = event => {
    const { onFocus } = this.props;

    onFocus(event);
    this.setState({ isFocused: true });
  };

  render() {
    const { id = nanoid(), label, multiline, ...rest } = this.props;
    const InputEl = multiline ? Textarea : Input;

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

TextField.defaultProps = {
  id: undefined,
  multiline: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  value: '',
};

TextField.propTypes = {
  label: PropTypes.node.isRequired,
  id: PropTypes.string,
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
};

function TextAreaField(props) {
  return <TextField {...props} input={Textarea} />;
}

function TextInputField(props) {
  return <TextField {...props} input={Input} />;
}

export { TextAreaField, TextInputField };
