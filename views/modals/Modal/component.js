import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import ButtonPrimary from '../../shared/ButtonPrimary';
import IconPrimary from '../../shared/IconPrimary';

const Modal = ({
  theme,
  onClose,
  modal: {
    isVisible,
    title,
    type,
  },
}) => (
  isVisible ? (
    <View style={theme.Modal.overlayStyle}>
      <View style={theme.Modal.containerStyle}>
        <View style={theme.Modal.headerStyle}>
          <Text style={theme.Modal.titleStyle}>
            {title}
          </Text>
          <ButtonPrimary
            customStyle={theme.Modal.buttonProps}
            icon={(<IconPrimary {...theme.Modal.iconProps} />)}
            onPress={onClose}
          />
        </View>
        <View style={theme.Modal.bodyStyle}>
          <Text>{type}</Text>
        </View>
      </View>
    </View>
  ) : null
);

Modal.propTypes = {
  theme: PropTypes.shape({
    Modal: PropTypes.shape({
      containerStyle: PropTypes.shape({}).isRequired,
      overlayStyle: PropTypes.shape({}).isRequired,
      headerStyle: PropTypes.shape({}).isRequired,
      titleStyle: PropTypes.shape({}).isRequired,
      buttonProps: PropTypes.shape({}).isRequired,
      iconProps: PropTypes.shape({}).isRequired,
      bodyStyle: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  modal: PropTypes.shape({
    isVisible: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default withTheme(Modal);
