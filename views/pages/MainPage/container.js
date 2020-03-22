import React, { Component } from 'react';

import Layout from '../Layout';
import MainPageComponent from './component';

class MainPageContainer extends Component {
  handleAddToSet = () => {

  }

  handleShowCurrency = () => {

  }

  render() {
    return (
      <MainPageComponent
        {...this.props}
        onAddToSet={this.handleAddToSet}
        onShowCurrency={this.handleShowCurrency}
      />
    );
  }
}

export default Layout(MainPageContainer);
