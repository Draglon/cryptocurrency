import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import ButtonPrimary from '../../../../shared/ButtonPrimary';
import IconPrimary from '../../../../shared/IconPrimary';

const MenuComponent = ({
  theme,
  onSetsPage,
}) => (
  <View style={theme.Menu.style}>
    <Text h4>Menu</Text>
    <View style={theme.MenuItem.style}>
      <ButtonPrimary
        customStyle={theme.MenuItem.buttonProps}
        title="My sets"
        onPress={onSetsPage}
        icon={(<IconPrimary {...theme.MenuItem.iconProps} />)}
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
      buttonProps: PropTypes.shape({}).isRequired,
      iconProps: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onSetsPage: PropTypes.func.isRequired,
};

export default withTheme(MenuComponent);
