import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, CheckBox } from 'react-native-elements';

const ButtonCheckbox = ({
  theme,
  title,
  checked,
  onPress,
}) => (
  <CheckBox
    title={title}
    type={theme.ButtonCheckbox.type}
    size={theme.ButtonCheckbox.size}
    containerStyle={theme.ButtonCheckbox.containerStyle}
    textStyle={theme.ButtonCheckbox.textStyle}
    checked={checked}
    onPress={onPress}
      // Component={Component}
      // iconType={iconType}
      // iconRight={iconRight}
      // right={right}
      // center={center}
      // titleProps={titleProps}
      // onLongPress={onLongPress}
      // onLongIconPress={onLongIconPress}
      // onIconPress={onIconPress}
    checkedIcon={theme.ButtonCheckbox.checkedIcon}
    uncheckedIcon={theme.ButtonCheckbox.uncheckedIcon}
  />
);

ButtonCheckbox.defaultProps = {
  title: '',
  checked: false,
};

ButtonCheckbox.propTypes = {
  theme: PropTypes.shape({
    ButtonCheckbox: PropTypes.shape({
      type: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      containerStyle: PropTypes.shape({}).isRequired,
      textStyle: PropTypes.shape({}).isRequired,
      checkedIcon: PropTypes.string.isRequired,
      uncheckedIcon: PropTypes.string.isRequired,
    }),
  }).isRequired,
  title: PropTypes.string,
  checked: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default withTheme(ButtonCheckbox);
