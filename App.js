import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header, Image } from 'react-native-elements';

import Layout from './views/Layout';

export default function App() {
  return (
    <View style={styles.main}>
      <Header
        containerStyle={styles.header}
        leftComponent={
          <Image
            source={require('./assets/images/logo.png')}
            style={styles.logo}
          />
        }
        centerComponent={{ text: 'Main page', style: { color: '#fff' } }}
        rightComponent={{ icon: 'menu', color: '#fff' }}
      />
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
  header: {
    backgroundColor: '#333',
    justifyContent: 'space-around',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'stretch',
  },
});