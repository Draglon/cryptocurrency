import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PAGES } from '../../../../constants/pages';
import MySetsEmptyComponent from './component';

class MySetsEmptyContainer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleCreateSet = () => {
    const { navigation } = this.props;

    navigation.navigate(PAGES.createSet);
  }

  render() {
    return (
      <MySetsEmptyComponent
        {...this.props}
        onCreateSet={this.handleCreateSet}
      />
    );
  }
}

export default MySetsEmptyContainer;
