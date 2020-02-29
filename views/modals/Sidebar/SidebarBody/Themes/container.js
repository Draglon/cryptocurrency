import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTheme } from 'react-native-elements';

import { THEMES } from '../../../../../themes';
import { setTypeTheme as setTypeThemeAction } from '../../../../../state/theme/actions';
import ThemesComponent from './component';

class ThemesContainer extends Component {
  static propTypes = {
    setTypeTheme: PropTypes.func.isRequired,
    replaceTheme: PropTypes.func.isRequired,
  };

  handleUpdateTheme = (typeTheme) => () => {
    const { setTypeTheme, replaceTheme } = this.props;

    replaceTheme(THEMES[typeTheme]);
    setTypeTheme(typeTheme);
  }

  render() {
    return (
      <ThemesComponent
        {...this.props}
        isSidebarOpen={this.isSidebarOpen}
        onSidebarClose={this.handleSidebarClose}
        onSetsPage={this.handleSetsPage}
        onUpdateTheme={this.handleUpdateTheme}
      />
    );
  }
}

const mapDispatchToProps = {
  setTypeTheme: setTypeThemeAction,
};

export default connect(null, mapDispatchToProps)(withTheme(ThemesContainer));
