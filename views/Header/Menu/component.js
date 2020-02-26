import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuComponent = ({ onMenuOpen }) => (
  <Button
    containerStyle={styles.btn}
    onPress={onMenuOpen}
    icon={(
      <Icon
        name="bars"
        size={15}
        color="white"
      />
    )}
  />
);

MenuComponent.propTypes = {
  onMenuOpen: PropTypes.func.isRequired,
};

export default MenuComponent;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    width: 50,
    height: 30,
  },
});
