import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';
import { ceil } from 'lodash';

const CurrencyField = ({
  theme,
  count,
  currency,
  selectedCurrency,
  price,
  priceSelectedCurrency,
}) => (
  <View style={theme.CurrencyField.containerStyle}>
    <View style={theme.CurrencyField.customInputStyle.inputContainerStyle}>
      <View style={theme.CurrencyField.customInputStyle.inputStyle}>
        <Text style={theme.CurrencyField.customInputStyle.inputTextStyle}>
          {ceil(count * (price / priceSelectedCurrency), 2)}
        </Text>
      </View>
      <View style={theme.CurrencyField.customInputStyle.rightIconContainerStyle}>
        <Text style={theme.CurrencyField.customInputStyle.rightIconStyle}>
          {currency}
        </Text>
      </View>
    </View>
    <Text style={theme.CurrencyField.textHintStyle}>
      {`1 ${selectedCurrency} ~ ${ceil(price / priceSelectedCurrency, 2)} ${currency}`}
    </Text>
  </View>
);

CurrencyField.propTypes = {
  theme: PropTypes.shape({
    CurrencyField: PropTypes.shape({
      containerStyle: PropTypes.shape({}).isRequired,
      customInputStyle: PropTypes.shape({
        inputContainerStyle: PropTypes.shape({}).isRequired,
        inputStyle: PropTypes.shape({}).isRequired,
        inputTextStyle: PropTypes.shape({}).isRequired,
        rightIconContainerStyle: PropTypes.shape({}).isRequired,
        rightIconStyle: PropTypes.shape({}).isRequired,
      }).isRequired,
      textHintStyle: PropTypes.shape({}).isRequired,
    }),
  }).isRequired,
  count: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceSelectedCurrency: PropTypes.number.isRequired,
};

export default withTheme(CurrencyField);
