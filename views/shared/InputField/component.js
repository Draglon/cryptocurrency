import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Input } from 'react-native-elements';
import { mergeDeepRight } from 'ramda';

const InputField = ({
  theme,
  label,
  placeholder,
  disabled,
  errorMessage,
  leftIcon,
  rightIcon,
  customStyle,
  onChangeText,
}) => {
  const input = mergeDeepRight(theme.InputField, customStyle);

  return (
    <Input
      containerStyle={input.containerStyle}
      inputContainerStyle={input.inputContainerStyle}
      inputStyle={input.inputStyle}
      label={label}
      labelStyle={input.labelStyle}
      labelProps={input.labelProps}
      placeholder={placeholder}
      disabled={disabled}
      disabledInputStyle={input.disabledInputStyle}
      errorMessage={errorMessage}
      errorStyle={input.errorStyle}
      errorProps={input.errorProps}
      leftIcon={leftIcon}
      leftIconContainerStyle={input.leftIconContainerStyle}
      rightIcon={rightIcon}
      rightIconContainerStyle={input.rightIconContainerStyle}
      onChangeText={onChangeText}
    />
  );
};

InputField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  errorMessage: '',
  leftIcon: <></>,
  rightIcon: <></>,
  customStyle: {},
  onChangeText: null,
};

InputField.propTypes = {
  theme: PropTypes.shape({
    InputField: PropTypes.shape({
      containerStyle: PropTypes.shape({}).isRequired,
      inputContainerStyle: PropTypes.shape({}).isRequired,
      inputStyle: PropTypes.shape({}).isRequired,
      labelStyle: PropTypes.shape({}).isRequired,
      labelProps: PropTypes.shape({}).isRequired,
      disabledInputStyle: PropTypes.shape({}).isRequired,
      errorStyle: PropTypes.shape({}).isRequired,
      errorProps: PropTypes.shape({}).isRequired,
      leftIconContainerStyle: PropTypes.shape({}).isRequired,
      rightIconContainerStyle: PropTypes.shape({}).isRequired,
    }),
  }).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  customStyle: PropTypes.shape({}),
  onChangeText: PropTypes.func,
};

export default withTheme(InputField);
