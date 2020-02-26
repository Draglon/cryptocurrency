import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from '../Header';
import MainPage from '../pages/MainPage';
import MenuModal from '../MenuModal';

const Layout = () => (
  <View style={styles.main}>
    <Header />
    <MenuModal />
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.layout}>
          <MainPage />
        </View>
      </ScrollView>
    </View>
  </View>
);

export default Layout;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: 'stretch',
  },
  main: {
    flex: 1,
    alignItems: 'stretch',
  },
  page: {
    backgroundColor: '#999999',
    flex: 9,
  },
});
