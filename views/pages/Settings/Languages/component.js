import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import ButtonCheckbox from '../../../shared/ButtonCheckbox';

const LanguagesComponent = ({
  theme,
  checkboxes,
  onUpdateLanguages,
}) => (
  <View style={theme.Languages.style}>
    <Text h4>Languages</Text>
    {checkboxes && checkboxes.map((item) => (
      <View style={theme.LanguagesItem.style} key={item.id}>
        <ButtonCheckbox
          title={item.title}
          checked={item.checked}
          onPress={onUpdateLanguages(item)}
        />
      </View>
    ))}
  </View>
);

LanguagesComponent.propTypes = {
  theme: PropTypes.shape({
    Languages: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
    LanguagesItem: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  checkboxes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onUpdateLanguages: PropTypes.func.isRequired,
};

export default withTheme(LanguagesComponent);
