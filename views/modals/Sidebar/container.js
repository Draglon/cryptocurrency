import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTheme } from 'react-native-elements';

import { THEMES } from '../../../themes';
import { SIDEBAR } from '../../../constants/sidebar';
import { setTypeTheme as setTypeThemeAction } from '../../../state/theme/actions';
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

  handleUpdateTheme = (typeTheme) => () => {
    const { setTypeTheme, replaceTheme } = this.props;

    replaceTheme(THEMES[typeTheme]);
    setTypeTheme(typeTheme);
  }

  render() {
    return (
      <SidebarComponent
        {...this.props}
        isSidebarOpen={this.isSidebarOpen}
        onSidebarClose={this.handleSidebarClose}
        onSetsPage={this.handleSetsPage}
        onUpdateTheme={this.handleUpdateTheme}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  sidebar: sidebarSelector(state),
});

const mapDispatchToProps = {
  setTypeTheme: setTypeThemeAction,
  sidebarStatus: sidebarStatusAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(SidebarContainer));
