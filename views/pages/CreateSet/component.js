import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import BackLink from '../../shared/BackLink';

const CreateSetComponent = ({
  navigation,
  theme,
}) => (
  <View style={theme.CreateSet.style}>
    <BackLink onPress={navigation.goBack} />
    <Text>Create set</Text>
  </View>
);

CreateSetComponent.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    CreateSet: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(CreateSetComponent);
