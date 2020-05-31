import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme } from 'react-native-elements';
import { isEmpty, keys } from 'ramda';

import ButtonPrimary from '../../../shared/ButtonPrimary';
import ButtonCheckbox from '../../../shared/ButtonCheckbox';

const SelectCurrentCurrencyModalComponent = ({
  theme,
  onSave,
  rates,
}) => (
  <>
    <SafeAreaView style={theme.Modal.bodyContentStyle}>
      <ScrollView>
        {!isEmpty(rates) ? (
          keys(rates).map((currency) => (
            <View key={currency}>
              <ButtonCheckbox
                title={currency}
                // checked={}
                onPress={() => {}}
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

SelectCurrentCurrencyModalComponent.defaultProps = {
  rates: null,
};

SelectCurrentCurrencyModalComponent.propTypes = {
  theme: PropTypes.shape({
    Modal: PropTypes.shape({
      bodyContentStyle: PropTypes.shape().isRequired,
      bodyButtonsStyle: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
  rates: PropTypes.shape(),
  onSave: PropTypes.func.isRequired,
};

export default withTheme(SelectCurrentCurrencyModalComponent);
