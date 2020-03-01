import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import CreateSetComponent from './component';

class CreateSetContainer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleBackLink = () => {
    const { navigation } = this.props;

    navigation.goBack();
  }

  render() {
    return (
      <CreateSetComponent
        {...this.props}
        onBackLink={this.handleBackLink}
      />
    );
  }
}

export default Layout(CreateSetContainer);
