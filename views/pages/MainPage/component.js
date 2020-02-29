import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import ButtonPrimary from '../../shared/ButtonPrimary';
import Header from '../../Header';
import Sidebar from '../../modals/Sidebar';

const MainPage = ({ navigation, theme, onAddToSet }) => (
  <View style={theme.Page.main}>
    <Header />
    <Sidebar navigation={navigation} />
    <View style={theme.Page.page}>
      <ScrollView>
        <View style={theme.Page.layout}>
          <Text h1>Default set</Text>
          <Text h2>Default set</Text>
          <Text h3>Default set</Text>
          <Text h4>Default set</Text>
          <Text>Default set</Text>

          <ButtonPrimary
            size="small"
            title="Add to set"
            onPress={onAddToSet}
          />
        </View>
      </ScrollView>
    </View>
  </View>
);

MainPage.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({
    Page: PropTypes.shape({
      main: PropTypes.shape({}).isRequired,
      page: PropTypes.shape({}).isRequired,
      layout: PropTypes.shape({}).isRequired,
    }).isRequired,
  }).isRequired,
  onAddToSet: PropTypes.func.isRequired,
};

export default withTheme(MainPage);
