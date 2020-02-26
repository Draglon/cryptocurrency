import React from 'react';
import { StyleSheet, Text } from 'react-native';

const HeaderContentComponent = () => (
  <Text style={styles.text}>
    Main page
  </Text>
);

export default HeaderContentComponent;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});
