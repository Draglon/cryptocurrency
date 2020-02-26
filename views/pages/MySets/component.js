import React from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import Header from '../../Header';
import Sidebar from '../../modals/Sidebar';

const MySets = ({ navigation }) => (
  <View style={styles.main}>
    <Header />
    <Sidebar navigation={navigation} />
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.layout}>
          <Text>My Sets</Text>
        </View>
      </ScrollView>
    </View>
  </View>
);

export default MySets;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: 'stretch',
  },
  main: {
    flex: 1,
    alignItems: 'stretch',
  },
  page: {
    backgroundColor: '#999999',
    flex: 9,
  },
});
