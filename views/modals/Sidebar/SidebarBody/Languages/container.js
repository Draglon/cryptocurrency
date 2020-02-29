import React, { Component } from 'react';
import { connect } from 'react-redux';

import LanguagesComponent from './component';

// eslint-disable-next-line react/prefer-stateless-function
class LanguagesContainer extends Component {
  render() {
    return (
      <LanguagesComponent
        {...this.props}
      />
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesContainer);
