import React, { Component } from 'react';

import Layout from '../Layout';
import MainPageComponent from './component';

class MainPageContainer extends Component {
  handleAddToSet = () => {

  }

  render() {
    return (
      <MainPageComponent
        {...this.props}
        onAddToSet={this.handleAddToSet}
      />
    );
  }
}

export default Layout(MainPageContainer);
