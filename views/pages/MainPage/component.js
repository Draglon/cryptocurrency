import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import ButtonPrimary from '../../shared/ButtonPrimary';
import Header from '../../Header';
import Sidebar from '../../modals/Sidebar';

const MainPage = ({ navigation, theme, onAddToSet }) => (
  <View style={theme.Page.style}>
    <Header />
    <Sidebar navigation={navigation} />
    <SafeAreaView style={theme.PageBody.style}>
      <ScrollView>
        <View style={theme.PageWrapper.style}>

          <Text>Default set</Text>

          <ButtonPrimary
            size="small"
            title="Add to set"
            onPress={onAddToSet}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  </View>
);

MainPage.propTypes = {
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
  onAddToSet: PropTypes.func.isRequired,
};

export default withTheme(MainPage);
