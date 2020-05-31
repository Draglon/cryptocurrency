import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import MODAL_COMPONENTS from './modalComponents';
import ButtonPrimary from '../../shared/ButtonPrimary';
import IconPrimary from '../../shared/IconPrimary';

const Modal = ({
  theme,
  onClose,
  modalType,
  modalProps,
}) => {
  if (!modalType) { return null; }

  const ModalContent = MODAL_COMPONENTS[modalType];
  return (
    <View style={theme.Modal.overlayStyle}>
      <View style={theme.Modal.containerStyle}>
        <View style={theme.Modal.headerStyle}>
          <Text style={theme.Modal.titleStyle}>
            {modalProps.title}
          </Text>
          <ButtonPrimary
            customStyle={theme.Modal.buttonProps}
            icon={(<IconPrimary {...theme.Modal.iconProps} />)}
            onPress={onClose}
          />
        </View>
        <View style={theme.Modal.bodyStyle}>
          <ModalContent modalProps={modalProps} />
        </View>
      </View>
    </View>
  );
};

Modal.defaultProps = {
  modalType: null,
  modalProps: {},
};

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
  modalType: PropTypes.string,
  modalProps: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default withTheme(Modal);
