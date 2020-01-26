import React from 'react'
import { View, Image, Button, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.wrapper}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <Button
          style={styles.btn}
          title="="
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottonStyle: 'solid',
    borderBottomColor: '#666666',
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'stretch',
  },
  btn: {
    flex: 1,
    width: 50,
    height: 30,
    resizeMode: 'stretch',
  },
});
