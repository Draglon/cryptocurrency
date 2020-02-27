import React from 'react';
import { Provider } from 'react-redux';
// import { IntlProvider } from 'react-intl';
// import { IntlProvider } from 'react-intl-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import 'intl';
// import 'intl/locale-data/jsonp/en';

import { persistor, store } from './configureStore';
// import enLocale from './locales/en';
import Layout from './views/Layout';

// const { locale, messages } = enLocale;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <IntlProvider locale={locale} messages={messages}> */}
        <Layout />
      {/* </IntlProvider> */}
    </PersistGate>
  </Provider>
);

export default App;
