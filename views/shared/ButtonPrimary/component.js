import React from 'react'
import { View, Button } from 'react-native';

const ButtonPrimary = () => {
  return (
    <View
      style={styles.buttonWrapper}
    >
      <Button
        style={styles.buttonPrimary}
        title="Add to list"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  buttonWrapper: {
    
  },
  buttonPrimary: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: "stretch",
  },
});