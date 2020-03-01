import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

import ButtonPrimary from '../ButtonPrimary';
import IconPrimary from '../IconPrimary';

const BackLink = ({ theme, onPress }) => (
  <View style={theme.BackLink.style}>
    <ButtonPrimary
      customStyle={theme.BackLink.buttonStyle}
      type="clear"
      title="Back"
      onPress={onPress}
      icon={(<IconPrimary {...theme.BackLink.iconStyle} />)}
    />
  </View>
);

BackLink.propTypes = {
  theme: PropTypes.shape({
    BackLink: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
      buttonStyle: PropTypes.shape({}).isRequired,
      iconStyle: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default withTheme(BackLink);
