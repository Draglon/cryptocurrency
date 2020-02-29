import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Button, Icon } from 'react-native-elements';

const MenuComponent = ({
  theme,
  onSetsPage,
}) => (
  <View style={theme.Menu.style}>
    <Button
      title="My sets"
      type="clear"
      color="black"
      onPress={onSetsPage}
      icon={(<Icon name="folder-open" />)}
    />
  </View>
);

MenuComponent.propTypes = {
  theme: PropTypes.shape({
    Menu: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onSetsPage: PropTypes.func.isRequired,
};

export default withTheme(MenuComponent);
