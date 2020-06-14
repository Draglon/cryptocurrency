import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { isEmpty, keys, includes } from 'ramda';

import ButtonClose from '../../../shared/ButtonClose';
import ButtonPrimary from '../../../shared/ButtonPrimary';
import ButtonCheckbox from '../../../shared/ButtonCheckbox';

const AddCurrenciesToSetModalComponent = ({
  theme,
  rates,
  currencySet,
  onClose,
  onSave,
  onSetCurrencySet,
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
                checked={includes(currency, currencySet)}
                onPress={onSetCurrencySet(currency)}
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

AddCurrenciesToSetModalComponent.defaultProps = {
  rates: null,
};

AddCurrenciesToSetModalComponent.propTypes = {
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
  currencySet: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSetCurrencySet: PropTypes.func.isRequired,
};

export default withTheme(AddCurrenciesToSetModalComponent);
