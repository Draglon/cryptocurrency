import React from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import Header from '../../Header';
import Sidebar from '../../modals/Sidebar';
// import CurrencyField from '../../shared/CurrencyField';

const MainPage = ({ navigation }) => (
  <View style={styles.main}>
    <Header />
    <Sidebar navigation={navigation} />
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.layout}>
          <Text>Default set</Text>
        </View>
      </ScrollView>
    </View>
  </View>
);

export default MainPage;

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

// export default function MySets() {
//   // const [value, onChangeText] = React.useState('Useless Placeholder');

//   return (
//     <View>
//       <View>
//         <Text>Default set</Text>
//         {/* <Button
//           title="Add to list"
//           // onPress={() => Alert.alert('Simple Button pressed')}
//         /> */}
//       </View>

//       {/* <View>
//         <CurrencyField />
//         <CurrencyField />
//         <CurrencyField />
//         <CurrencyField />
//       </View> */}
//     </View>
//   );
// }
