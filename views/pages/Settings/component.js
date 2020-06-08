import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme, Divider } from 'react-native-elements';

import BackLink from '../../shared/BackLink';
import Themes from './Themes';
import Languages from './Languages';

const SettingsComponent = ({ navigation, theme }) => (
  <View>
    <SafeAreaView style={theme.SidebarBody.style}>
      <ScrollView>
        <View style={theme.SidebarWrapper.style}>
          <BackLink onPress={navigation.goBack} />
          <Themes />
          <Divider />
          <Languages />
          <Divider />
        </View>
      </ScrollView>
    </SafeAreaView>
  </View>
);

SettingsComponent.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    SidebarBody: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
    SidebarWrapper: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(SettingsComponent);
