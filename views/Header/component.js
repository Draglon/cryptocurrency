import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

import Logo from '../shared/Logo';
import MenuButton from './MenuButton';

const HeaderComponent = ({ theme }) => (
  <View style={theme.Header.style}>
    <Logo />
    <MenuButton />
  </View>
);

HeaderComponent.propTypes = {
  theme: PropTypes.shape({
    Header: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(HeaderComponent);
