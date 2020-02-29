import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { SIDEBAR } from '../../../../constants/sidebar';
import { PAGES } from '../../../../constants/pages';
import { sidebarStatus as sidebarStatusAction } from '../../../../state/sidebar/actions';
import MenuComponent from './component';

class MenuContainer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    sidebarStatus: PropTypes.func.isRequired,
  };

  handleSetsPage = () => {
    const { navigation, sidebarStatus } = this.props;

    navigation.navigate(PAGES.sets);
    sidebarStatus(SIDEBAR.close);
  }

  render() {
    return (
      <MenuComponent
        {...this.props}
        onSetsPage={this.handleSetsPage}
      />
    );
  }
}

const mapDispatchToProps = {
  sidebarStatus: sidebarStatusAction,
};

export default connect(null, mapDispatchToProps)(MenuContainer);
