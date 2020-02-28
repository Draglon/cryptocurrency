import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const { height, width } = Dimensions.get('window');

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

const SidebarComponent = ({
  // theme,
  isSidebarOpen,
  onSidebarClose,
  onSetsPage,
  onUpdateTheme,
}) => (
  <View style={animateSidebar(isSidebarOpen)}>
    <Icon
      name="times"
      onPress={onSidebarClose}
    />
    <Button
      title="My sets"
      onPress={onSetsPage}
    />
    <Button
      title="Light"
      onPress={onUpdateTheme('light')}
    />
    <Button
      title="Dark"
      onPress={onUpdateTheme('dark')}
    />
  </View>
);

SidebarComponent.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  onSetsPage: PropTypes.func.isRequired,
  onSidebarClose: PropTypes.func.isRequired,
  onUpdateTheme: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default SidebarComponent;
