import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { updateIntl as updateIntlAction } from 'react-intl-redux';

// import enLocale from '../../locales/en';
import { themeSelector } from '../../state/theme/selectors';
import LayoutComponent from './component';

class LayoutContainer extends Component {
  componentDidMount() {
    // const { updateIntl } = this.props;
    // updateIntl(enLocale);
  }

  render() {
    return (
      <LayoutComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  theme: themeSelector(state),
});

const mapDispatchToProps = {
  // updateIntl: updateIntlAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
