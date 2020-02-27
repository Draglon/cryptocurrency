import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import THEME from '../../themes';
import MainPage from '../pages/MainPage';
import MySets from '../pages/MySets';

const Stack = createStackNavigator();

const Layout = ({ themeType }) => (
  <ThemeProvider theme={THEME[themeType]}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="MySets" component={MySets} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default Layout;
