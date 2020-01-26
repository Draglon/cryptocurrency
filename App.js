import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from './views/Header';
import Layout from './views/Layout';

export default function App() {
  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.page}>
        <ScrollView>
          <Layout />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'stretch',
  },
  page: {
    backgroundColor: '#999999',
    flex: 9,
  },
});