import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { withTheme, Text, Divider } from 'react-native-elements';

import ButtonPrimary from '../../shared/ButtonPrimary';
import InputField from '../../shared/InputField';
import CurrencyField from '../../shared/CurrencyField';

const MainPage = ({ theme, onAddToSet, onShowCurrency }) => (
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
              title="USD"
              onPress={onShowCurrency}
              customStyle={theme.MainPage.showCurrencyButton}
            />
          )}
          customStyle={theme.MainPage.showCurrencyInput}
        />
      </View>
    </View>
    <Divider />
    <View style={theme.MainPage.bodyStyle}>
      <CurrencyField />
      <CurrencyField />
      <CurrencyField />
      <CurrencyField />
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
  onAddToSet: PropTypes.func.isRequired,
  onShowCurrency: PropTypes.func.isRequired,
};

export default withTheme(MainPage);
