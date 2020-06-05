import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme } from 'react-native-elements';

import Header from '../Header';
import Modal from '../modals/Modal';
import Sidebar from '../modals/Sidebar';

export default (Component) => {
  class Layout extends React.PureComponent {
    static propTypes = {
      navigation: PropTypes.shape({}).isRequired,
      theme: PropTypes.shape({
        Page: PropTypes.shape({
          style: PropTypes.shape({}).isRequired,
        }).isRequired,
        PageBody: PropTypes.shape({
          style: PropTypes.shape({}).isRequired,
        }).isRequired,
        PageWrapper: PropTypes.shape({
          style: PropTypes.shape({}).isRequired,
        }).isRequired,
      }).isRequired,
    };

    render = () => {
      const { navigation, theme } = this.props;
      return (
        <View style={theme.Page.style}>
          <Modal />
          <Header />
          <Sidebar navigation={navigation} />
          <SafeAreaView style={theme.PageBody.style}>
            <ScrollView>
              <View style={theme.PageWrapper.style}>
                <Component navigation={navigation} />
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      );
    };
  }

  return withTheme(Layout);
};
