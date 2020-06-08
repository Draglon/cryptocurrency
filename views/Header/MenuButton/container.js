import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuButtonComponent from './component';

class MenuButtonContainer extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  handleSidebarOpen = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  }

  render() {
    return (
      <MenuButtonComponent
        onSidebarOpen={this.handleSidebarOpen}
      />
    );
  }
}

export default MenuButtonContainer;
