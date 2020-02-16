import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const HeaderComponent = () => {
  return (
    <Header
      containerStyle={styles.header}
      leftComponent={
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      }
      centerComponent={{ text: 'Main page', style: { color: '#fff' } }}
      rightComponent={{ icon: 'menu', color: '#fff' }}
    />
  );
}

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#666',
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
