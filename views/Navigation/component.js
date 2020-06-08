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
import Settings from '../pages/Settings';

import AddCurrenciesToSet from './ModalsScreen/AddCurrenciesToSetModalScreen';
import ChangeCurrency from './ModalsScreen/ChangeCurrencyModalScreen';

const Drawer = createDrawerNavigator();

const NavigationComponent = ({ theme }) => (
  <ThemeProvider theme={THEMES[theme]}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={PAGES.default} mode="modal">
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
        <Drawer.Screen
          name={PAGES.settings}
          component={Settings}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="AddCurrencies" component={AddCurrenciesToSet} />
        <Drawer.Screen name="ChangeCurrency" component={ChangeCurrency} />
      </Drawer.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

NavigationComponent.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default NavigationComponent;
