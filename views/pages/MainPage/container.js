import React, { Component } from 'react';

import MainPageComponent from './component';

class MainPageContainer extends Component {
  handleAddToSet = () => {
    console.log('click');
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

export default MainPageContainer;
