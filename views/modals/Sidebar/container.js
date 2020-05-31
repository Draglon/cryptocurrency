import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SIDEBAR } from '../../../constants/sidebar';
import { sidebarSelector } from '../../../state/sidebar/selectors';
import SidebarComponent from './component';

class SidebarContainer extends Component {
  static propTypes = {
    sidebar: PropTypes.string.isRequired,
  };

  get isSidebarOpen() {
    const { sidebar } = this.props;
    return sidebar === SIDEBAR.open;
  }

  render() {
    return (
      <SidebarComponent
        {...this.props}
        isSidebarOpen={this.isSidebarOpen}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  sidebar: sidebarSelector(state),
});

export default connect(mapStateToProps)(SidebarContainer);
