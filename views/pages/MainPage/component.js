import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme, Text, Divider } from 'react-native-elements';
import { isEmpty } from 'ramda';

import ButtonAddToSet from './ButtonAddToSet';
import ButtonPrimary from '../../shared/ButtonPrimary';
import InputField from '../../shared/InputField';
import CurrencyField from '../../shared/CurrencyField';

const MainPage = ({
  navigation,
  theme,
  rates,
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
    <SafeAreaView style={theme.MainPage.scroll}>
      <ScrollView>
        <View style={theme.MainPage.bodyStyle}>
          {!isEmpty(selectedCurrencySet) && (
            selectedCurrencySet.map((currency) => (
              <CurrencyField
                key={currency}
                currency={currency}
                selectedCurrency={selectedCurrency}
                price={rates[currency]}
                priceSelectedCurrency={rates[selectedCurrency]}
                count={currencyCount}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
    <ButtonAddToSet navigation={navigation} />
  </View>
);

MainPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({
    MainPage: PropTypes.shape({
      style: PropTypes.shape({}).isRequired,
      headerStyle: PropTypes.shape({}).isRequired,
      headerItemStyle: PropTypes.shape({}).isRequired,
      headerTitleStyle: PropTypes.shape({}).isRequired,
      showCurrencyButton: PropTypes.shape({}).isRequired,
      showCurrencyInput: PropTypes.shape({}).isRequired,
      scroll: PropTypes.shape({}).isRequired,
      bodyStyle: PropTypes.shape({}).isRequired,
      addToSetBtn: PropTypes.shape({
        buttonProps: PropTypes.shape({}).isRequired,
        iconProps: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  rates: PropTypes.shape({}).isRequired,
  currencyCount: PropTypes.string.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  selectedCurrencySet: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddToSet: PropTypes.func.isRequired,
  onShowCurrency: PropTypes.func.isRequired,
  onChangeCurrencyCount: PropTypes.func.isRequired,
};

export default withTheme(MainPage);
