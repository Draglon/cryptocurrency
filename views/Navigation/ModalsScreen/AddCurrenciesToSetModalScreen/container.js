import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import newCurrencySet from '../../../../utils/newCurrencySet';
import { setSelectedCurrencySet as setSelectedCurrencySetAction } from '../../../../state/currency/actions';
import { currencyRatesSelector, selectedCurrencySetSelector } from '../../../../state/currency/selectors';
import AddCurrenciesToSetModalComponent from './component';

class AddCurrenciesToSetModal extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    setSelectedCurrencySet: PropTypes.func.isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    currencySet: [],
  };

  handleSetCurrencySet = (currency) => () => {
    const { currencySet } = this.state;

    this.setState({
      currencySet: newCurrencySet(currency, currencySet),
    });
  }

  handleSave = () => {
    const { currencySet } = this.state;
    const { navigation, setSelectedCurrencySet } = this.props;

    navigation.goBack();
    setSelectedCurrencySet(currencySet);
  };

  render() {
    return (
      <AddCurrenciesToSetModalComponent
        {...this.state}
        {...this.props}
        onSave={this.handleSave}
        onSetCurrencySet={this.handleSetCurrencySet}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  rates: currencyRatesSelector(state),
  selectedCurrencySet: selectedCurrencySetSelector(state),
});

const mapDispatchToProps = {
  setSelectedCurrencySet: setSelectedCurrencySetAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrenciesToSetModal);
