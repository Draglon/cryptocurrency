import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'react-native-elements';

import ButtonPrimary from '../../shared/ButtonPrimary';
import IconPrimary from '../../shared/IconPrimary';

const MenuButtonComponent = ({ theme, onSidebarOpen }) => (
  <ButtonPrimary
    customStyle={theme.MenuButton.buttonProps}
    onPress={onSidebarOpen}
    icon={(<IconPrimary {...theme.MenuButton.iconProps} />
    )}
  />
);

MenuButtonComponent.propTypes = {
  theme: PropTypes.shape({
    MenuButton: PropTypes.shape({
      buttonProps: PropTypes.shape({}).isRequired,
      iconProps: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onSidebarOpen: PropTypes.func.isRequired,
};

export default withTheme(MenuButtonComponent);
