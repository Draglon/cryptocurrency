import React from 'react'
import { View, StyleSheet } from 'react-native';

import MainPage from '../pages/MainPage';

export default function Layout() {
  return (
    <View style={styles.layout}>
      <MainPage />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#cccccc',
    flex: 1,
    alignItems: "stretch",
  },
});