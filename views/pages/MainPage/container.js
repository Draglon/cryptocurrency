import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCurrency as fetchCurrencyAction } from '../../../state/currency/actions';
import {
  currencyRatesSelector,
  selectedCurrencySelector,
} from '../../../state/currency/selectors';
import Layout from '../Layout';
import MainPageComponent from './component';

class MainPageContainer extends Component {
  static propTypes = {
    fetchCurrency: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleAddToSet = () => {

  }

  handleShowCurrency = () => {

  }

  render() {
    return (
      <MainPageComponent
        {...this.props}
        onAddToSet={this.handleAddToSet}
        onShowCurrency={this.handleShowCurrency}
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
};

export default Layout(connect(mapStateToProps, mapDispatchToProps)(MainPageContainer));
