import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import Header from '../../Header';
import Sidebar from '../../modals/Sidebar';

const MySets = ({ navigation, theme }) => (
  <View style={theme.Page.style}>
    <Header />
    <Sidebar navigation={navigation} />
    <SafeAreaView style={theme.PageBody.style}>
      <ScrollView>
        <View style={theme.PageWrapper.style}>
          <Text>My Sets</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </View>
);

MySets.propTypes = {
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

export default withTheme(MySets);
