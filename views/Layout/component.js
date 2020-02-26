import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../pages/MainPage';
import MySets from '../pages/MySets';

const Stack = createStackNavigator();

const Layout = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="MySets" component={MySets} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Layout;
