import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

const ThemesComponent = ({ theme, onUpdateTheme }) => (
  <View style={theme.Themes.style}>
    <Text h4>Themes</Text>
    <View style={theme.ThemesItem.style}>
      <Button
        type="clear"
        title="Light"
        onPress={onUpdateTheme('light')}
      />
    </View>
    <View style={theme.ThemesItem.style}>
      <Button
        type="clear"
        title="Dark"
        onPress={onUpdateTheme('dark')}
      />
    </View>
  </View>
);

ThemesComponent.propTypes = {
  theme: PropTypes.shape({
    Themes: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
    ThemesItem: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onUpdateTheme: PropTypes.func.isRequired,
};

export default ThemesComponent;
