import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Button, Icon } from 'react-native-elements';

const MenuButtonComponent = ({ theme, onSidebarOpen }) => (
  <Button
    containerStyle={theme.MenuButton.style}
    onPress={onSidebarOpen}
    icon={(<Icon name="bars" color={theme.MenuButton.iconColor} />)}
  />
);

MenuButtonComponent.propTypes = {
  onSidebarOpen: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    MenuButton: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
      iconColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(MenuButtonComponent);
