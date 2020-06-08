import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// import enLocale from './locales/en';
import httpClient from './lib/httpClient';
import rootReducer from './state/reducers';
import operations from './state/operationsRoot';

const migrations = {
  0: (state) => ({ ...state, device: undefined }),
  1: (state) => ({ device: state.device }),
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 4,
  migrate: createMigrate(migrations, { debug: false }),
};

// const initialState = {
//   intl: {
//     ...enLocale,
//   },
// };

const persistedReducer = persistReducer(persistConfig, rootReducer);
const logicMiddleware = createLogicMiddleware([...operations], { httpClient });
const store = createStore(
  persistedReducer,
  // initialState,
  composeWithDevTools(applyMiddleware(logicMiddleware)),
);
const persistor = persistStore(store);

export {
  store,
  persistor,
};
