import { combineReducers } from 'redux';

// import intlReducer from './intl';
import themeReducer from './theme';
import sidebarReducer from './sidebar';

export default combineReducers({
  themeProvider: themeReducer,
  sidebar: sidebarReducer,
  // intl: intlReducer,
});
