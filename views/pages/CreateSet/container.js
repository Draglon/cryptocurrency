import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Layout from '../Layout';
import CreateSetComponent from './component';

// eslint-disable-next-line react/prefer-stateless-function
class CreateSetContainer extends Component {
  render() {
    return (
      <CreateSetComponent
        {...this.props}
      />
    );
  }
}

export default Layout(CreateSetContainer);
