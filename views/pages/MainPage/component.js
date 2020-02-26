import React from 'react';
import { Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

// import CurrencyField from '../../shared/CurrencyField';

export default function MySets() {
  // const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View>
      <View>
        <Text>Default set</Text>
        <Button
          title="Add to list"
          // onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>

      {/* <View>
        <CurrencyField />
        <CurrencyField />
        <CurrencyField />
        <CurrencyField />
      </View> */}

      <View>
        <Text>Avatar</Text>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
      </View>
    </View>
  );
}
