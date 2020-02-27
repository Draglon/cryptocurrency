import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

// import enLocale from './locales/en';
import rootReducer from './state/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// const initialState = {
//   intl: {
//     ...enLocale,
//   },
// };

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
