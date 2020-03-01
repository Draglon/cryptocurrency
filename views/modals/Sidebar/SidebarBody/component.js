import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme, Divider } from 'react-native-elements';

import Menu from './Menu';
import Themes from './Themes';
import Languages from './Languages';

const SidebarBodyComponent = ({ navigation, theme }) => (
  <SafeAreaView style={theme.SidebarBody.style}>
    <ScrollView>
      <View style={theme.SidebarWrapper.style}>
        <Menu navigation={navigation} />
        <Divider />
        <Themes />
        <Divider />
        <Languages />
        <Divider />
      </View>
    </ScrollView>
  </SafeAreaView>
);

SidebarBodyComponent.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({
    SidebarBody: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
    SidebarWrapper: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(SidebarBodyComponent);
