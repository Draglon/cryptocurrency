import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SIDEBAR } from '../../../constants/sidebar';
import { sidebarStatus as sidebarStatusAction } from '../../../state/sidebar/actions';
import MenuButtonComponent from './component';

class MenuButtonContainer extends Component {
  static propTypes = {
    sidebarStatus: PropTypes.func.isRequired,
  };

  handleSidebarOpen = () => {
    const { sidebarStatus } = this.props;
    sidebarStatus(SIDEBAR.open);
  }

  render() {
    return (
      <MenuButtonComponent
        onSidebarOpen={this.handleSidebarOpen}
      />
    );
  }
}

const mapDispatchToProps = {
  sidebarStatus: sidebarStatusAction,
};

export default connect(null, mapDispatchToProps)(MenuButtonContainer);
