import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const ButtonPrimary = () => (
  <View
    style={styles.buttonWrapper}
  >
    <Button
      style={styles.buttonPrimary}
      title="Add to list"
    />
  </View>
);

export default ButtonPrimary;

const styles = StyleSheet.create({
  buttonWrapper: {

  },
  buttonPrimary: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: 'stretch',
  },
});
