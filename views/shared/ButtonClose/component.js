import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Button, Icon } from 'react-native-elements';

const ButtonClose = ({ theme, onPress }) => (
  <Button
    containerStyle={theme.ButtonClose.style}
    type="clear"
    onPress={onPress}
    icon={(<Icon name={theme.ButtonClose.iconName} color={theme.ButtonClose.iconColor} />)}
  />
);

ButtonClose.propTypes = {
  theme: PropTypes.shape({
    ButtonClose: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
      iconName: PropTypes.string.isRequired,
      iconColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default withTheme(ButtonClose);
