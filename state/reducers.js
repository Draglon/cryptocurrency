import { combineReducers } from 'redux';

import sidebarReducer from './sidebar';
// import intlReducer from './intl';

export default combineReducers({
  sidebar: sidebarReducer,
  // intl: intlReducer,
});
