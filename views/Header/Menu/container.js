import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MENU_MODAL } from '../../../constants/menu';
import { menuStatus as menuStatusAction } from '../../../state/menu/actions';
import MenuComponent from './component';

class MenuContainer extends Component {
  handleOpenMenu = () => {
    const { menuStatus } = this.props;
    menuStatus(MENU_MODAL.open);
  }

  render() {
    return (
      <MenuComponent
        onOpenMenu={this.handleOpenMenu}
      />
    );
  }
}

const mapDispatchToProps = {
  menuStatus: menuStatusAction,
};

export default connect(null, mapDispatchToProps)(MenuContainer);
