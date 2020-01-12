import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from './views/Header';
import Layout from './views/Layout';

export default function App() {
  return (
    <View style={styles.main}>
      <Header />
      <ScrollView>
        <Layout />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});