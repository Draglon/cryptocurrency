import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTheme } from 'react-native-elements';
import { map, merge } from 'ramda';

import { THEMES } from '../../../../../themes';
import { setTypeTheme as setTypeThemeAction } from '../../../../../state/theme/actions';
import { themeCheckboxesSelector } from '../../../../../state/theme/selectors';
import ThemesComponent from './component';

class ThemesContainer extends Component {
  static propTypes = {
    setTypeTheme: PropTypes.func.isRequired,
    replaceTheme: PropTypes.func.isRequired,
    checkboxes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  handleUpdateTheme = (checkbox) => () => {
    const { setTypeTheme, replaceTheme, checkboxes } = this.props;

    replaceTheme(THEMES[checkbox.value]);
    setTypeTheme({
      theme: checkbox.value,
      checkboxes: map((item) => merge(item, { checked: item.id === checkbox.id }), checkboxes),
    });
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

const mapStateToProps = (state) => ({
  checkboxes: themeCheckboxesSelector(state),
});

const mapDispatchToProps = {
  setTypeTheme: setTypeThemeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ThemesContainer));
