import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

import Logo from './Logo';
import Menu from './Menu';

const HeaderComponent = ({ theme }) => (
  <View style={theme.Header.style}>
    <Logo />
    <Menu />
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
