import React, { Component } from 'react';
import { connect } from 'react-redux';

import LanguagesComponent from './component';

class LanguagesContainer extends Component {
  render() {
    return (
      <LanguagesComponent
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesContainer);
