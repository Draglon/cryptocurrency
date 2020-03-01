import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import MySetsComponent from './component';

class MySetsContainer extends Component {
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
      <MySetsComponent
        {...this.props}
        onBackLink={this.handleBackLink}
      />
    );
  }
}

export default Layout(MySetsContainer);
