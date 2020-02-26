import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

const MenuModalComponent = ({ onMenuClose, isMenuModal }) => (
  <View style={animateMenuModal(isMenuModal)}>
    <Icon
      name="times"
      style={styles.iconClose}
      onPress={onMenuClose}
    />
  </View>
);

MenuModalComponent.propTypes = {
  onMenuClose: PropTypes.func.isRequired,
  isMenuModal: PropTypes.bool.isRequired,
};

export default MenuModalComponent;

const animateMenuModal = (isMenuModal) => ({
  backgroundColor: '#fff',
  position: 'absolute',
  top: 0,
  left: isMenuModal ? 0 : '-100%',
  height,
  width,
  zIndex: 999,
  transitionDuration: '1s',
  transitionProperty: 'left',
});
const styles = StyleSheet.create({
  iconClose: {
    backgroundColor: '#ccc',
    cursor: 'pointer',
    color: '#000',
    fontSize: 18,
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    lineHeight: 30,
    textAlign: 'center',
  },
});
