import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Divider } from 'react-native-elements';

import SidebarHeader from './Header';
import Menu from './Menu';
import Themes from './Themes';

const SidebarComponent = ({
  theme,
  navigation,
  isSidebarOpen,
}) => (
  <View style={{ ...theme.Sidebar.style, left: isSidebarOpen ? 0 : '-100%' }}>
    <SidebarHeader />
    <Menu navigation={navigation} />
    <Divider />
    <Themes />
    <Divider />
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
