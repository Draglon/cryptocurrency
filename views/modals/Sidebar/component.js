import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';

const SidebarComponent = ({
  theme,
  navigation,
  isSidebarOpen,
}) => (
  <View
    style={{
      ...theme.Sidebar.style,
      left: isSidebarOpen ? 0 : '-100%',
    }}
  >
    <SidebarHeader />
    <SidebarBody navigation={navigation} />
  </View>
);

SidebarComponent.propTypes = {
  theme: PropTypes.shape({
    Sidebar: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({}).isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default withTheme(SidebarComponent);
