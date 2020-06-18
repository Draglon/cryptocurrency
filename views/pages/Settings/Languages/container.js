import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LANGUAGES_CHECKBOXES } from '../../../../constants/theme';
import LanguagesComponent from './component';

// eslint-disable-next-line react/prefer-stateless-function
class LanguagesContainer extends Component {
  handleUpdateLanguages = () => () => {
    // console.log('lang', lang);
  }

  // eslint-disable-next-line react/state-in-constructor
  state = {
    checkboxes: LANGUAGES_CHECKBOXES,
  };

  render() {
    return (
      <LanguagesComponent
        {...this.state}
        {...this.props}
        onUpdateLanguages={this.handleUpdateLanguages}
      />
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesContainer);
