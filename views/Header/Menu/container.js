import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MENU_MODAL } from '../../../constants/menu';
import { menuStatus as menuStatusAction } from '../../../state/menu/actions';
import MenuComponent from './component';

class MenuContainer extends Component {
  handleMenuOpen = () => {
    const { menuStatus } = this.props;
    menuStatus(MENU_MODAL.open);
  }

  render() {
    return (
      <MenuComponent
        onMenuOpen={this.handleMenuOpen}
      />
    );
  }
}

const mapDispatchToProps = {
  menuStatus: menuStatusAction,
};

export default connect(null, mapDispatchToProps)(MenuContainer);
