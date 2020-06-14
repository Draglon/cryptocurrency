import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { isEmpty, keys } from 'ramda';

import ButtonClose from '../../../shared/ButtonClose';
import ButtonPrimary from '../../../shared/ButtonPrimary';
import ButtonCheckbox from '../../../shared/ButtonCheckbox';

const SelectCurrentCurrencyModalComponent = ({
  theme,
  rates,
  currentCurrency,
  onClose,
  onSave,
  onSetCurrency,
}) => (
  <View style={theme.Modal.containerStyle}>
    <View style={theme.Modal.headerStyle}>
      <ButtonClose onPress={onClose} />
    </View>
    <SafeAreaView style={theme.Modal.bodyStyle}>
      <ScrollView>
        {!isEmpty(rates) ? (
          keys(rates).map((currency) => (
            <View key={currency}>
              <ButtonCheckbox
                title={currency}
                checked={currentCurrency === currency}
                onPress={onSetCurrency(currency)}
              />
            </View>
          ))
        ) : null}
      </ScrollView>
    </SafeAreaView>
    <View style={theme.Modal.footerStyle}>
      <ButtonPrimary
        title="Save"
        size="middle"
        onPress={onSave}
        customStyle={theme.Modal.customSubmitButtonStyle}
      />
    </View>
  </View>
);

SelectCurrentCurrencyModalComponent.defaultProps = {
  rates: null,
};

SelectCurrentCurrencyModalComponent.propTypes = {
  theme: PropTypes.shape({
    Modal: PropTypes.shape({
      containerStyle: PropTypes.shape().isRequired,
      buttonCloseProps: PropTypes.shape().isRequired,
      iconProps: PropTypes.shape().isRequired,
      headerStyle: PropTypes.shape().isRequired,
      bodyStyle: PropTypes.shape().isRequired,
      footerStyle: PropTypes.shape().isRequired,
      customSubmitButtonStyle: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
  rates: PropTypes.shape(),
  currentCurrency: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSetCurrency: PropTypes.func.isRequired,
};

export default withTheme(SelectCurrentCurrencyModalComponent);
