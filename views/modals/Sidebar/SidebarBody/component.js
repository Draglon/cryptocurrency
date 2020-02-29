import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Divider } from 'react-native-elements';

import Menu from './Menu';
import Themes from './Themes';

const SidebarBodyComponent = ({ navigation, theme }) => (
  <View style={theme.SidebarBody.style}>
    <Menu navigation={navigation} />
    <Divider />
    <Themes />
    <Divider />
  </View>
);

SidebarBodyComponent.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({
    SidebarBody: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(SidebarBodyComponent);
