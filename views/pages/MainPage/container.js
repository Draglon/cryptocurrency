import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'ramda';

import { fetchCurrency as fetchCurrencyAction } from '../../../state/currency/actions';
import {
  currencyRatesSelector,
  selectedCurrencySelector,
  selectedSetSelector,
} from '../../../state/currency/selectors';
import Layout from '../Layout';
import MainPageComponent from './component';

class MainPageContainer extends Component {
  static propTypes = {
    fetchCurrency: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    currencyCount: '0',
    animatedButtonSize: new Animated.Value(0),
    animatedButtonOpacity: new Animated.Value(0),
  };

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleAddToSet = () => {
    const { navigation } = this.props;
    navigation.navigate('AddCurrencies');
  }

  handleShowCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('ChangeCurrency');
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
  selectedCurrencySet: selectedSetSelector(state),
});

const mapDispatchToProps = {
  fetchCurrency: fetchCurrencyAction,
};

export default compose(
  Layout,
  connect(mapStateToProps, mapDispatchToProps),
)(MainPageContainer);
