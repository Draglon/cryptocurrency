import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuComponent = ({ onOpenMenu }) => (
  <Button
    containerStyle={styles.btn}
    onPress={onOpenMenu}
    icon={(
      <Icon
        name="bars"
        size={15}
        color="white"
      />
      )}
  />
);

export default MenuComponent;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    width: 50,
    height: 30,
    resizeMode: 'stretch',
  },
});
