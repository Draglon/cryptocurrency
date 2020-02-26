import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SIDEBAR } from '../../../constants/sidebar';
import { sidebarStatus as sidebarStatusAction } from '../../../state/sidebar/actions';
import SidebarComponent from './component';

class SidebarContainer extends Component {
  handleSidebarOpen = () => {
    const { sidebarStatus } = this.props;
    sidebarStatus(SIDEBAR.open);
  }

  render() {
    return (
      <SidebarComponent
        onSidebarOpen={this.handleSidebarOpen}
      />
    );
  }
}

const mapDispatchToProps = {
  sidebarStatus: sidebarStatusAction,
};

export default connect(null, mapDispatchToProps)(SidebarContainer);
