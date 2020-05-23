import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import ButtonCheckbox from '../../../../shared/ButtonCheckbox';

const ThemesComponent = ({ theme, checkboxes, onUpdateTheme }) => (
  <View style={theme.Themes.style}>
    <Text h4>Themes</Text>
    {checkboxes && checkboxes.map((item) => (
      <View style={theme.ThemesItem.style} key={item.id}>
        <ButtonCheckbox
          title={item.title}
          checked={item.checked}
          onPress={onUpdateTheme(item)}
        />
      </View>
    ))}
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
  checkboxes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onUpdateTheme: PropTypes.func.isRequired,
};

export default ThemesComponent;
