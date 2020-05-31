import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal as hideModalAction } from '../../../../state/modal/actions';
import { currencyRatesSelector } from '../../../../state/currency/selectors';
import AddCurrenciesToSetModalComponent from './component';

class AddCurrenciesToSetModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
  };

  handleSave = () => {
    const { hideModal } = this.props;

    hideModal();
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
  hideModal: hideModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrenciesToSetModal);
