import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, CheckBox } from 'react-native-elements';

// import { BUTTON_TYPES, BUTTON_SIZES } from '../../../constants/theme';

const ButtonCheckbox = ({
  theme,
  type,
  size,
  title,
  checked,
  onPress,
}) => {
  return (
    <CheckBox
      title={title}
      size={size}
      checked={checked}
      // Component={Component}
      // onPress={onPress}
      // iconType={iconType}
      // iconRight={iconRight}
      // right={right}
      // center={center}
      // titleProps={titleProps}
      // containerStyle={containerStyle}
      // textStyle={textStyle}
      // onLongPress={onLongPress}
      // onLongIconPress={onLongIconPress}
      // onIconPress={onIconPress}
      // checkedIcon={checkedIcon}
      // uncheckedIcon={uncheckedIcon}
      // checkedColor={checkedColor}
      // uncheckedColor={uncheckedColor}
      // checkedTitle={checkedTitle}
      // fontFamily={fontFamily}
    />
  );
};

ButtonCheckbox.defaultProps = {
  type: '',
  size: 18,
  title: '',
};

ButtonCheckbox.propTypes = {
  theme: PropTypes.shape({
    ButtonPrimary: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }),
  }).isRequired,
  type: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  checked: PropTypes.bool.isRequired,
};

export default withTheme(ButtonCheckbox);
