import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Text } from 'react-native-elements';

const SelectCurrentCurrencyModal = ({
  theme,
  modalProps,
}) => (
  <Text>asda</Text>
);

SelectCurrentCurrencyModal.defaultProps = {
  modalProps: {},
};

SelectCurrentCurrencyModal.propTypes = {
  theme: PropTypes.shape({
    Modal: PropTypes.shape({
    }).isRequired,
  }).isRequired,
  modalProps: PropTypes.shape(),
};

export default withTheme(SelectCurrentCurrencyModal);
