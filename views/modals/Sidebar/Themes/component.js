import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const ThemesComponent = ({ theme, onUpdateTheme }) => (
  <View>
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

ThemesComponent.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  onUpdateTheme: PropTypes.func.isRequired,
};

export default ThemesComponent;
