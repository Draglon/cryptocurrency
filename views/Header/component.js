import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

import Logo from './Logo';
import Menu from './Menu';
import Content from './Content';

const HeaderComponent = () => (
  <Header containerStyle={styles.header}>
    <Logo />
    <Content />
    <Menu />
  </Header>
);

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#666',
    flex: 1,
  },
});
