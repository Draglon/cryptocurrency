import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './configureStore';
import Layout from './views/Layout';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider locale="en">
        <Layout />
      </IntlProvider>
    </PersistGate>
  </Provider>
);

export default App;
