import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal as hideModalAction } from '../../../state/modal/actions';
import { modalSelector } from '../../../state/modal/selectors';
import ModalComponent from './component';

class Modal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
  };

  handleClose = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  render() {
    return (
      <ModalComponent
        {...this.props}
        onClose={this.handleClose}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  modal: modalSelector(state),
});

const mapDispatchToProps = {
  hideModal: hideModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
