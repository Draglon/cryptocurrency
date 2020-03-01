import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Icon } from 'react-native-elements';

import ButtonPrimary from '../ButtonPrimary';

const BackLink = ({ theme, onPress }) => (
  <View style={theme.BackLink.style}>
    <ButtonPrimary
      customStyle={theme.BackLink.buttonStyle}
      type="clear"
      title="Back"
      onPress={onPress}
      icon={(
        <Icon
          iconStyle={theme.BackLink.iconStyle}
          name={theme.BackLink.iconName}
          size={theme.BackLink.iconSize}
          color={theme.BackLink.iconColor}
        />
      )}
    />
  </View>
);

BackLink.propTypes = {
  theme: PropTypes.shape({
    BackLink: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
      buttonStyle: PropTypes.shape({}).isRequired,
      iconStyle: PropTypes.shape({}).isRequired,
      iconName: PropTypes.string.isRequired,
      iconSize: PropTypes.number.isRequired,
      iconColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default withTheme(BackLink);
