import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SidebarComponent = ({ onSidebarOpen }) => (
  <Button
    containerStyle={styles.btn}
    onPress={onSidebarOpen}
    icon={(
      <Icon
        name="bars"
        size={15}
        color="white"
      />
    )}
  />
);

SidebarComponent.propTypes = {
  onSidebarOpen: PropTypes.func.isRequired,
};

export default SidebarComponent;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    width: 50,
    height: 30,
  },
});
