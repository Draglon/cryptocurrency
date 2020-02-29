import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Button } from 'react-native-elements';

const LanguagesComponent = ({
  // theme,
}) => (
  <View>
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
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(LanguagesComponent);
