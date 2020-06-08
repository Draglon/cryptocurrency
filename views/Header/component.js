import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

import Logo from '../shared/Logo';
import MenuButton from './MenuButton';

const HeaderComponent = ({ navigation, theme }) => (
  <View style={theme.Header.style}>
    <Logo />
    <MenuButton navigation={navigation} />
  </View>
);

HeaderComponent.propTypes = {
  navigation: PropTypes.shape().isRequired,
  theme: PropTypes.shape({
    Header: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(HeaderComponent);
