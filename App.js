import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { persistor, store } from './configureStore';
import MainPage from './views/pages/MainPage';
import MySets from './views/pages/MySets';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider locale="en">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="MySets" component={MySets} />
          </Stack.Navigator>
        </NavigationContainer>
      </IntlProvider>
    </PersistGate>
  </Provider>
);

export default App;
