import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import InputField from '../InputField';

const CurrencyField = ({
  theme,
  price,
  currency,
  selectedCurrency,
}) => (
  <View style={theme.CurrencyField.containerStyle}>
    <InputField
      customStyle={theme.CurrencyField.customInputStyle}
      placeholder="0"
      rightIcon={(
        <Text style={theme.CurrencyField.textCurrencyStyle}>
          {currency}
        </Text>
      )}
    />
    <Text style={theme.CurrencyField.textHintStyle}>
      {`1 ${selectedCurrency} ~ ${price} ${currency}`}
    </Text>
  </View>
);

CurrencyField.defaultProps = {
  price: 0,
  selectedCurrency: 'USD',
};

CurrencyField.propTypes = {
  theme: PropTypes.shape({
    CurrencyField: PropTypes.shape({
      containerStyle: PropTypes.shape({}).isRequired,
      customInputStyle: PropTypes.shape({}).isRequired,
      textCurrencyStyle: PropTypes.shape({}).isRequired,
      textHintStyle: PropTypes.shape({}).isRequired,
    }),
  }).isRequired,
  price: PropTypes.number,
  currency: PropTypes.string.isRequired,
  selectedCurrency: PropTypes.string,
};

export default withTheme(CurrencyField);
