import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text, Icon } from 'react-native-elements';

import ButtonPrimary from '../../../../shared/ButtonPrimary';

const MenuComponent = ({
  theme,
  onSetsPage,
}) => (
  <View style={theme.Menu.style}>
    <Text h4>Menu</Text>
    <View style={theme.MenuItem.style}>
      <ButtonPrimary
        type="clear"
        title="My sets"
        onPress={onSetsPage}
        icon={(
          <Icon
            name="folder-open"
            iconStyle={theme.MenuItemIcon.iconStyle}
            size={theme.MenuItemIcon.iconSize}
            color={theme.MenuItemIcon.iconColor}
          />
        )}
      />
    </View>
  </View>
);

MenuComponent.propTypes = {
  theme: PropTypes.shape({
    Menu: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
    MenuItem: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
    MenuItemIcon: PropTypes.shape({
      iconStyle: PropTypes.shape({}).isRequired,
      iconSize: PropTypes.number.isRequired,
      iconColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onSetsPage: PropTypes.func.isRequired,
};

export default withTheme(MenuComponent);
