import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MENU_MODAL } from '../../constants/menu';
import { menuStatus as menuStatusAction } from '../../state/menu/actions';
import { menuModalSelector } from '../../state/menu/selectors';
import MenuModalComponent from './component';

class MenuModalContainer extends Component {
  get isMenuModal() {
    const { menuModal } = this.props;

    return menuModal === MENU_MODAL.open;
  }

  handleMenuClose = () => {
    const { menuStatus } = this.props;
    menuStatus(MENU_MODAL.close);
  }

  render() {
    return (
      <MenuModalComponent
        isMenuModal={this.isMenuModal}
        onMenuClose={this.handleMenuClose}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  menuModal: menuModalSelector(state),
});

const mapDispatchToProps = {
  menuStatus: menuStatusAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuModalContainer);
