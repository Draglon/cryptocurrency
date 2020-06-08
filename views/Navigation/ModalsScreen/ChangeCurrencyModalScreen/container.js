import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { currencyRatesSelector } from '../../../../state/currency/selectors';
import SelectCurrentCurrencyModalComponent from './component';

class SelectCurrentCurrencyModal extends Component {
  static propTypes = {

  };

  handleSave = () => {
    // const { hideModal } = this.props;
  };

  render() {
    return (
      <SelectCurrentCurrencyModalComponent
        {...this.props}
        onSave={this.handleSave}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  rates: currencyRatesSelector(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrentCurrencyModal);
