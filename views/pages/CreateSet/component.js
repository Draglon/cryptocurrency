import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import BackLink from '../../shared/BackLink';

const CreateSetComponent = ({ theme, onBackLink }) => (
  <View style={theme.CreateSet.style}>
    <BackLink onPress={onBackLink} />
    <Text>Create set</Text>
  </View>
);

CreateSetComponent.propTypes = {
  theme: PropTypes.shape({
    CreateSet: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onBackLink: PropTypes.func.isRequired,
};

export default withTheme(CreateSetComponent);
