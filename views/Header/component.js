import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
// import { Icon, Header } from 'react-native-elements';

// import Icon from '../shared/Icon';

export default function MainHeader() {
  return (
    <View>
      {/* <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}
    </View>
    // <View style={styles.header}>
    //   <View style={styles.wrapper}>
    //     {/* <Image
    //       style={styles.logo}
    //       source={require('../../assets/images/logo.png')}
    //     /> */}
    //     {/* <Button
    //       style={styles.btn}
    //       title="="
    //       onPress={() => Alert.alert('Simple Button pressed')}
    //     /> */}
    //     {/* <View>
    //       <Icon name='rowing' />
    //     </View> */}
    //   </View>
    // </View>
  );
}

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
