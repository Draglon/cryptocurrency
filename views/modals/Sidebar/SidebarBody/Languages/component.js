import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Button, Text } from 'react-native-elements';

const LanguagesComponent = ({
  theme,
  onUpdateLanguages,
}) => (
  <View style={theme.Languages.style}>
    <Text h4>Languages</Text>
    <View style={theme.LanguagesItem.style}>
      <Button
        type="clear"
        title="English"
        onPress={onUpdateLanguages('en')}
      />
    </View>
    <View style={theme.LanguagesItem.style}>
      <Button
        type="clear"
        title="Russian"
        onPress={onUpdateLanguages('ru')}
      />
    </View>
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
  onUpdateLanguages: PropTypes.func.isRequired,
};

export default withTheme(LanguagesComponent);
