import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './configureStore';
import theme from './themes';
import Layout from './views/Layout';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout theme={theme} />
    </PersistGate>
  </Provider>
);

export default App;
