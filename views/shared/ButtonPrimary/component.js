import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Button } from 'react-native-elements';
import { mergeAll, includes } from 'ramda';

import { BUTTON_TYPES, BUTTON_SIZES } from '../../../constants/theme';

const ButtonPrimary = ({
  theme,
  type,
  size,
  title,
  icon,
  iconRight,
  loading,
  disabled,
  raised,
  onPress,
}) => {
  const buttonType = includes(type, BUTTON_TYPES) ? theme.ButtonPrimary[type] : {};
  const buttonSize = includes(size, BUTTON_SIZES) ? theme.ButtonPrimary[size] : {};
  const button = mergeAll([theme.ButtonPrimary, buttonType, buttonSize]);

  return (
    <Button
      title={title}
      titleStyle={button.titleStyle}
      buttonStyle={button.buttonStyle}
      containerStyle={button.containerStyle}
      disabledStyle={button.disabledStyle}
      disabledTitleStyle={button.disabledTitleStyle}
      loadingStyle={button.loadingStyle}
      iconContainerStyle={button.iconContainerStyle}
      type={button.type}
      icon={icon}
      iconRight={iconRight}
      loading={loading}
      disabled={disabled}
      onPress={onPress}
      raised={raised}
    />
  );
};

ButtonPrimary.defaultProps = {
  type: '',
  size: '',
  title: '',
  icon: <></>,
  iconRight: false,
  loading: false,
  disabled: false,
  raised: false,
};

ButtonPrimary.propTypes = {
  theme: PropTypes.shape({
    ButtonPrimary: PropTypes.shape({
      type: PropTypes.string.isRequired,
      titleStyle: PropTypes.shape({}).isRequired,
      buttonStyle: PropTypes.shape({}).isRequired,
      containerStyle: PropTypes.shape({}).isRequired,
      disabledStyle: PropTypes.shape({}).isRequired,
      disabledTitleStyle: PropTypes.shape({}).isRequired,
      loadingStyle: PropTypes.shape({}).isRequired,
      iconContainerStyle: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  raised: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default withTheme(ButtonPrimary);
