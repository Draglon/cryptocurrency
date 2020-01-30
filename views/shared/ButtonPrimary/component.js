import React from 'react'
import { View, Button } from 'react-native';

export default function ButtonPrimary() {
  return (
    <View>
      <Button
        style={styles.buttonPrimary}
        title="Add to list"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: "stretch",
  },
});