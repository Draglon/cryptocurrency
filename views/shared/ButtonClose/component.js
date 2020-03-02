import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'react-native-elements';

import ButtonPrimary from '../ButtonPrimary';
import IconPrimary from '../IconPrimary';

const ButtonClose = ({ theme, onPress }) => (
  <ButtonPrimary
    customStyle={theme.ButtonClose.buttonProps}
    onPress={onPress}
    icon={(<IconPrimary {...theme.ButtonClose.iconProps} />)}
  />
);

ButtonClose.propTypes = {
  theme: PropTypes.shape({
    ButtonClose: PropTypes.shape({
      buttonProps: PropTypes.shape({}).isRequired,
      iconProps: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default withTheme(ButtonClose);
