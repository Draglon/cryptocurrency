import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { updateIntl as updateIntlAction } from 'react-intl-redux';

// import enLocale from '../../locales/en';
import { themeTypeSelector } from '../../state/theme/selectors';
import LayoutComponent from './component';

class LayoutContainer extends Component {
  componentDidMount() {
    // const { updateIntl } = this.props;
    // updateIntl(enLocale);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <LayoutComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  themeType: themeTypeSelector(state),
});

const mapDispatchToProps = {
  // updateIntl: updateIntlAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
