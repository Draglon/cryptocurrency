import React, { Component } from 'react';
import { connect } from 'react-redux';

import LanguagesComponent from './component';

// eslint-disable-next-line react/prefer-stateless-function
class LanguagesContainer extends Component {
  handleUpdateLanguages = (language) => () => {
    console.log('language', language);
  }

  render() {
    return (
      <LanguagesComponent
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
