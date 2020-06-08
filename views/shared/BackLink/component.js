import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

import ButtonPrimary from '../ButtonPrimary';
import IconPrimary from '../IconPrimary';

const BackLink = ({
  theme,
  title,
  onPress,
}) => (
  <View style={theme.BackLink.style}>
    <ButtonPrimary
      customStyle={theme.BackLink.buttonProps}
      title={title}
      onPress={onPress}
      icon={(<IconPrimary {...theme.BackLink.iconProps} />)}
    />
  </View>
);

BackLink.defaultProps = {
  title: 'Back',
};

BackLink.propTypes = {
  theme: PropTypes.shape({
    BackLink: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
      buttonProps: PropTypes.shape({}).isRequired,
      iconProps: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default withTheme(BackLink);
