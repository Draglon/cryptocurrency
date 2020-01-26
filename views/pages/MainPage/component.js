import React from 'react'
import { Text, View, TextInput, Button } from 'react-native';

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
      </View>
    </View>
  );
}
