import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Button, Icon } from 'react-native-elements';

import Logo from '../../../shared/Logo';

const SidebarHeaderComponent = ({
  theme,
  onSidebarClose,
}) => (
  <View style={theme.SidebarHeader.style}>
    <Logo />
    <Button
      type="clear"
      onPress={onSidebarClose}
      icon={(<Icon name="times" />)}
    />
  </View>
);

SidebarHeaderComponent.propTypes = {
  theme: PropTypes.shape({
    SidebarHeader: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onSidebarClose: PropTypes.func.isRequired,
};

export default withTheme(SidebarHeaderComponent);
