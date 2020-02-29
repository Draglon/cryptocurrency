import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

import Logo from '../../../shared/Logo';
import ButtonClose from '../../../shared/ButtonClose';

const SidebarHeaderComponent = ({
  theme,
  onSidebarClose,
}) => (
  <View style={theme.SidebarHeader.style}>
    <Logo />
    <ButtonClose onPress={onSidebarClose} />
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
