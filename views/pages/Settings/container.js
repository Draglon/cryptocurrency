import React, { Component } from 'react';

import Layout from '../Layout';
import SettingsComponent from './component';

// eslint-disable-next-line react/prefer-stateless-function
class Settings extends Component {
  render() {
    return (
      <SettingsComponent
        {...this.props}
      />
    );
  }
}

export default Layout(Settings);
