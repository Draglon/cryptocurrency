import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { updateIntl as updateIntlAction } from 'react-intl-redux';

import enLocale from '../../locales/en';
import LayoutComponent from './component';

class LayoutContainer extends Component {
  // componentDidMount() {
  //   const { updateIntl } = this.props;
  //   updateIntl(enLocale);
  // }

  render() {
    return (
      <LayoutComponent />
    );
  }
}

const mapDispatchToProps = {
  // updateIntl: updateIntlAction,
};

export default connect(null, mapDispatchToProps)(LayoutContainer);
