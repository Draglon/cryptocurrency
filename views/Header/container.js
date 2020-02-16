import React, { Component } from 'react';

import HeaderComponent from './component';

class HeaderContainer extends Component {
  handleMainMenu = () => {
    console.log('MainMenu');
  }

  render() {
    return (
      <HeaderComponent
        onMainMenu={this.handleMainMenu}
      />
    );
  }
}

export default HeaderContainer;
