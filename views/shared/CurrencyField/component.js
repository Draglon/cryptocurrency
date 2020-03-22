import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import InputField from '../InputField';

const CurrencyField = ({ theme }) => (
  <View style={theme.CurrencyField.containerStyle}>
    <InputField
      customStyle={theme.CurrencyField.customInputStyle}
      placeholder="0"
      rightIcon={(
        <Text style={theme.CurrencyField.textCurrencyStyle}>
          USD
        </Text>
      )}
    />
    <Text style={theme.CurrencyField.textHintStyle}>
      1 USD ~ 25.05 UAH
    </Text>
  </View>
);

CurrencyField.propTypes = {
  theme: PropTypes.shape({
    CurrencyField: PropTypes.shape({
      containerStyle: PropTypes.shape({}).isRequired,
      customInputStyle: PropTypes.shape({}).isRequired,
      textCurrencyStyle: PropTypes.shape({}).isRequired,
      textHintStyle: PropTypes.shape({}).isRequired,
    }),
  }).isRequired,
};

export default withTheme(CurrencyField);
