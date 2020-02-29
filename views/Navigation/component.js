import 'react-native-gesture-handler';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { THEMES } from '../../themes';
import { PAGES } from '../../constants/pages';
import MainPage from '../pages/MainPage';
import MySets from '../pages/MySets';

const Stack = createStackNavigator();

const NavigationComponent = ({ theme }) => (
  <ThemeProvider theme={THEMES[theme]}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={PAGES.default} component={MainPage} />
        <Stack.Screen name={PAGES.sets} component={MySets} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

NavigationComponent.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default NavigationComponent;
