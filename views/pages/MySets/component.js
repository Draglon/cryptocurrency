import React from 'react'
import { Text, View, Button } from 'react-native';

import CurrencyField from '../../shared/CurrencyField';

export default function MainPage() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View>
      <View>
        <Text>Default set</Text>
        <Button
          title="Add to list"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>

      <View>
        <CurrencyField />
        <CurrencyField />
        <CurrencyField />
        <CurrencyField />
      </View>
    </View>
  );
}
