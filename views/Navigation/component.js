import 'react-native-gesture-handler';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { THEMES } from '../../themes';
import { PAGES } from '../../constants/pages';
import MainPage from '../pages/MainPage';
import MySets from '../pages/MySets';
import CreateSet from '../pages/CreateSet';

const Drawer = createDrawerNavigator();

const NavigationComponent = ({ theme }) => (
  <ThemeProvider theme={THEMES[theme]}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={PAGES.default}>
        <Drawer.Screen
          name={PAGES.default}
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name={PAGES.sets}
          component={MySets}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name={PAGES.createSet}
          component={CreateSet}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

NavigationComponent.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default NavigationComponent;
