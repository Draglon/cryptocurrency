import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SIDEBAR } from '../../../constants/sidebar';
import { sidebarStatus as sidebarStatusAction } from '../../../state/sidebar/actions';
import { sidebarSelector } from '../../../state/sidebar/selectors';
import SidebarComponent from './component';

class SidebarContainer extends Component {
  get isSidebarOpen() {
    const { sidebar } = this.props;

    return sidebar === SIDEBAR.open;
  }

  handleSidebarClose = () => {
    const { sidebarStatus } = this.props;
    sidebarStatus(SIDEBAR.close);
  }

  handleSetsPage = () => {
    const { navigation, sidebarStatus } = this.props;
    navigation.navigate('MySets');
    sidebarStatus(SIDEBAR.close);
  }

  render() {
    return (
      <SidebarComponent
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...this.props}
        isSidebarOpen={this.isSidebarOpen}
        onSidebarClose={this.handleSidebarClose}
        onSetsPage={this.handleSetsPage}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  sidebar: sidebarSelector(state),
});

const mapDispatchToProps = {
  sidebarStatus: sidebarStatusAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
