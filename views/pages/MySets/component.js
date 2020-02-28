import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView } from 'react-native';
import { withTheme } from 'react-native-elements';

import Header from '../../Header';
import Sidebar from '../../modals/Sidebar';

const MySets = ({ navigation, theme }) => (
  <View style={theme.Page.main}>
    <Header />
    <Sidebar navigation={navigation} />
    <View style={theme.Page.page}>
      <ScrollView>
        <View style={theme.Page.layout}>
          <Text>My Sets</Text>
        </View>
      </ScrollView>
    </View>
  </View>
);

MySets.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({
    Page: PropTypes.shape({
      main: PropTypes.shape({}).isRequired,
      page: PropTypes.shape({}).isRequired,
      layout: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(MySets);
