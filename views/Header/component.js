import React from 'react';
import { StyleSheet, View } from 'react-native';

import Logo from './Logo';
import Menu from './Menu';

const HeaderComponent = () => (
  <View style={styles.header}>
    <Logo />
    <Menu />
  </View>
);

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#272736',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#666',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 70,
  },
});
