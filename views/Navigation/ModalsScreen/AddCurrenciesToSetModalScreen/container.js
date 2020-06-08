import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { currencyRatesSelector } from '../../../../state/currency/selectors';
import AddCurrenciesToSetModalComponent from './component';

class AddCurrenciesToSetModal extends Component {
  static propTypes = {

  };

  handleSave = () => {
    
  };

  render() {
    return (
      <AddCurrenciesToSetModalComponent
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrenciesToSetModal);
