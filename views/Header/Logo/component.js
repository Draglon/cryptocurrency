import React from 'react';
import { StyleSheet, Image } from 'react-native';

import logo from '../../../assets/images/logo.png';

const Logo = () => (
  <Image
    source={logo}
    style={styles.logo}
  />
);

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
  },
});
