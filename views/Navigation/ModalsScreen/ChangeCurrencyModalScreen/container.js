import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSelectedCurrency as setSelectedCurrencyAction } from '../../../../state/currency/actions';
import { currencyRatesSelector, selectedCurrencySelector } from '../../../../state/currency/selectors';
import SelectCurrentCurrencyModalComponent from './component';

class SelectCurrentCurrencyModal extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    selectedCurrency: PropTypes.string.isRequired,
    setSelectedCurrency: PropTypes.func.isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    currency: null,
  };

  handleClose = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  get currentCurrency() {
    const { currency } = this.state;
    const { selectedCurrency } = this.props;

    return currency || selectedCurrency;
  }

  handleSetCurrency = (currency) => () => {
    this.setState({ currency });
  }

  handleSave = () => {
    const { currency } = this.state;
    const { setSelectedCurrency } = this.props;

    this.handleClose();
    setSelectedCurrency(currency);
  };

  render() {
    return (
      <SelectCurrentCurrencyModalComponent
        {...this.state}
        {...this.props}
        currentCurrency={this.currentCurrency}
        onClose={this.handleClose}
        onSave={this.handleSave}
        onSetCurrency={this.handleSetCurrency}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  rates: currencyRatesSelector(state),
  selectedCurrency: selectedCurrencySelector(state),
});

const mapDispatchToProps = {
  setSelectedCurrency: setSelectedCurrencyAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrentCurrencyModal);
