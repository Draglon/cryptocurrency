import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import ButtonPrimary from '../../../shared/ButtonPrimary';

const MySetsEmptyComponent = ({ theme, onCreateSet }) => (
  <View style={theme.MySetsEmpty.style}>
    <Text h4>You do not have any sets</Text>
    <ButtonPrimary
      title="Create new set"
      onPress={onCreateSet}
    />
  </View>
);

MySetsEmptyComponent.propTypes = {
  theme: PropTypes.shape({
    MySetsEmpty: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onCreateSet: PropTypes.func.isRequired,
};

export default withTheme(MySetsEmptyComponent);
