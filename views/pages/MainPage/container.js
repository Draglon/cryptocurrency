import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCurrency as fetchCurrencyAction } from '../../../state/currency/actions';
import { showModal as showModalAction } from '../../../state/modal/actions';
import {
  currencyRatesSelector,
  selectedCurrencySelector,
} from '../../../state/currency/selectors';
import Layout from '../Layout';
import MainPageComponent from './component';

class MainPageContainer extends Component {
  static propTypes = {
    fetchCurrency: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    currencyCount: '0',
  };

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleAddToSet = () => {
    const { showModal } = this.props;

    showModal({
      title: 'Select currency',
      type: 'ADD_CURRENCIES_TO_SET',
    });
  }

  handleShowCurrency = () => {
    const { showModal } = this.props;

    showModal({
      title: 'Change current currency',
      type: 'CHANGE_CURRENT_CURRENCY',
    });
  }

  handleChangeCurrencyCount = (value) => {
    this.setState({ currencyCount: value });
  }

  render() {
    return (
      <MainPageComponent
        {...this.props}
        {...this.state}
        onAddToSet={this.handleAddToSet}
        onShowCurrency={this.handleShowCurrency}
        onChangeCurrencyCount={this.handleChangeCurrencyCount}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  rates: currencyRatesSelector(state),
  selectedCurrency: selectedCurrencySelector(state),
});

const mapDispatchToProps = {
  fetchCurrency: fetchCurrencyAction,
  showModal: showModalAction,
};

export default Layout(connect(mapStateToProps, mapDispatchToProps)(MainPageContainer));
