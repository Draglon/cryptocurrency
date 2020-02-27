import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet, View, Button, Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const SidebarComponent = ({ onSetsPage, onSidebarClose, isSidebarOpen }) => (
  <View style={animateSidebar(isSidebarOpen)}>
    <Icon
      name="times"
      style={styles.iconClose}
      onPress={onSidebarClose}
    />
    <Button
      title="My sets"
      onPress={onSetsPage}
    />
  </View>
);

SidebarComponent.propTypes = {
  onSetsPage: PropTypes.func.isRequired,
  onSidebarClose: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default SidebarComponent;

const animateSidebar = (isSidebarOpen) => ({
  backgroundColor: '#fff',
  position: 'absolute',
  top: 0,
  left: isSidebarOpen ? 0 : '-100%',
  height,
  width,
  zIndex: 999,
  transitionDuration: '1s',
  transitionProperty: 'left',
});

const styles = StyleSheet.create({
  iconClose: {
    backgroundColor: '#ccc',
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
