import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Button } from 'react-native-elements';

const LanguagesComponent = ({
  theme,
}) => (
  <View style={theme.Languages.style}>
    <Button
      title="Light"
      // onPress={}
    />
    <Button
      title="Dark"
      // onPress={}
    />
  </View>
);

LanguagesComponent.propTypes = {
  theme: PropTypes.shape({
    Languages: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(LanguagesComponent);
