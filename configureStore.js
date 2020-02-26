import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import rootReducer from './state/reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {
  // intl: {
  //   locale: 'en',
  //   messages: {
  //     'app.Hello': 'Hello!',
  //   },
  // },
};

const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

export {
  store,
  persistor,
};
