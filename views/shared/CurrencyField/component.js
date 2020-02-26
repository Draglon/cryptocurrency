import React from 'react';
import { View, TextInput, Button } from 'react-native';

const CurrencyField = () => (
  <View>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />
    <Button
      title="Add to list"
    />
  </View>
);
export default CurrencyField;
