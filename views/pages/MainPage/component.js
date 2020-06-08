import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text, Divider } from 'react-native-elements';
import { isEmpty, keys } from 'ramda';

import ButtonPrimary from '../../shared/ButtonPrimary';
import InputField from '../../shared/InputField';
import CurrencyField from '../../shared/CurrencyField';

const MainPage = ({
  theme,
  currencyCount,
  selectedCurrency,
  selectedCurrencySet,
  onAddToSet,
  onShowCurrency,
  onChangeCurrencyCount,
}) => (
  <View style={theme.MainPage.style}>
    <View style={theme.MainPage.headerStyle}>
      <View style={theme.MainPage.headerItemStyle}>
        <Text h4 h4Style={theme.MainPage.headerTitleStyle}>
          Default set
        </Text>
        <ButtonPrimary
          title="Add to set"
          size="small"
          onPress={onAddToSet}
        />
      </View>
      <View style={theme.MainPage.headerItemStyle}>
        <InputField
          placeholder="0"
          rightIcon={(
            <ButtonPrimary
              title={selectedCurrency}
              onPress={onShowCurrency}
              customStyle={theme.MainPage.showCurrencyButton}
            />
          )}
          customStyle={theme.MainPage.showCurrencyInput}
          onChangeText={onChangeCurrencyCount}
        />
      </View>
    </View>
    <Divider />
    <View style={theme.MainPage.bodyStyle}>
      {!isEmpty(selectedCurrencySet) ? (<></>
        // keys(rates).map((currency) => (
        //   <CurrencyField
        //     key={currency}
        //     currency={currency}
        //     price={rates[currency]}
        //     currencyCount={currencyCount * rates[currency]}
        //     selectedCurrency={selectedCurrency}
        //   />
        // ))
      ) : null}
    </View>
  </View>
);

MainPage.propTypes = {
  theme: PropTypes.shape({
    MainPage: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
      headerStyle: PropTypes.shape({}).isRequired,
      headerItemStyle: PropTypes.shape({}).isRequired,
      headerTitleStyle: PropTypes.shape({}).isRequired,
      showCurrencyButton: PropTypes.shape({}).isRequired,
      showCurrencyInput: PropTypes.shape({}).isRequired,
      bodyStyle: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  currencyCount: PropTypes.string.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  selectedCurrencySet: PropTypes.arrayOf({}).isRequired,
  onAddToSet: PropTypes.func.isRequired,
  onShowCurrency: PropTypes.func.isRequired,
  onChangeCurrencyCount: PropTypes.func.isRequired,
};

export default withTheme(MainPage);
