import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { isEmpty, keys, includes } from 'ramda';

import ButtonPrimary from '../../../shared/ButtonPrimary';
import ButtonCheckbox from '../../../shared/ButtonCheckbox';

const AddCurrenciesToSetModalComponent = ({
  theme,
  rates,
  currencySet,
  onSave,
  onSetCurrencySet,
}) => (
  <>
    <SafeAreaView style={theme.Modal.bodyContentStyle}>
      <ScrollView>
        {!isEmpty(rates) ? (
          keys(rates).map((currency) => (
            <View key={currency}>
              <ButtonCheckbox
                title={currency}
                checked={includes(currency, currencySet)}
                onPress={onSetCurrencySet(currency)}
              />
            </View>
          ))
        ) : null}
      </ScrollView>
    </SafeAreaView>
    <View style={theme.Modal.bodyButtonsStyle}>
      <ButtonPrimary
        title="Save"
        size="middle"
        onPress={onSave}
      />
    </View>
  </>
);

AddCurrenciesToSetModalComponent.defaultProps = {
  rates: null,
};

AddCurrenciesToSetModalComponent.propTypes = {
  theme: PropTypes.shape({
    Modal: PropTypes.shape({
      bodyContentStyle: PropTypes.shape().isRequired,
      bodyButtonsStyle: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
  rates: PropTypes.shape(),
  currencySet: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSave: PropTypes.func.isRequired,
  onSetCurrencySet: PropTypes.func.isRequired,
};

export default withTheme(AddCurrenciesToSetModalComponent);
