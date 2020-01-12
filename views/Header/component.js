import React from 'react'
import { View, Image, Button, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.wrapper}>
        <Image
          style={styles.logo}
          source={require('../../assets/label-ruby.png')}
        />
        <Button
          style={styles.btn}
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#666666',
    alignSelf: "stretch",
    justifyContent: 'space-between',
  },
  wrapper: {
    // backgroundColor: '#666666',
    // alignSelf: "stretch",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'stretch',
  },
  btn: {

  },
});
