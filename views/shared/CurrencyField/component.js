import React from 'react'
import { View, TextInput, Button } from 'react-native';

export default function CurrencyField() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button
        title="Add to list"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
}
