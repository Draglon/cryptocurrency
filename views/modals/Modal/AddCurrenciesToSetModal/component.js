import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Text } from 'react-native-elements';

const AddCurrenciesToSetModal = ({
  theme,
  modalProps: {
    text,
  },
}) => (
  <Text>{text}</Text>
);

AddCurrenciesToSetModal.defaultProps = {
  modalProps: {},
};

AddCurrenciesToSetModal.propTypes = {
  theme: PropTypes.shape({
    Modal: PropTypes.shape({
    }).isRequired,
  }).isRequired,
  modalProps: PropTypes.shape(),
};

export default withTheme(AddCurrenciesToSetModal);
