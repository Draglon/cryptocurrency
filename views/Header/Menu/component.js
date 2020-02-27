import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const SidebarComponent = ({ onSidebarOpen }) => (
  <Button
    containerStyle={styles.btnMenu}
    onPress={onSidebarOpen}
    icon={(<Icon name="bars" />)}
  />
);

SidebarComponent.propTypes = {
  onSidebarOpen: PropTypes.func.isRequired,
};

export default SidebarComponent;

const styles = StyleSheet.create({
  btnMenu: {
    backgroundColor: 'blue',
    width: 50,
    height: 30,
  },
});
