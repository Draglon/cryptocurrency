import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SIDEBAR } from '../../../../constants/sidebar';
import { sidebarStatus as sidebarStatusAction } from '../../../../state/sidebar/actions';
import SidebarHeaderComponent from './component';

class SidebarHeaderContainer extends Component {
  static propTypes = {
    sidebarStatus: PropTypes.func.isRequired,
  };

  handleSidebarClose = () => {
    const { sidebarStatus } = this.props;

    sidebarStatus(SIDEBAR.close);
  }

  render() {
    return (
      <SidebarHeaderComponent
        {...this.props}
        onSidebarClose={this.handleSidebarClose}
      />
    );
  }
}

const mapDispatchToProps = {
  sidebarStatus: sidebarStatusAction,
};

export default connect(null, mapDispatchToProps)(SidebarHeaderContainer);
