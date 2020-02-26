import { combineReducers } from 'redux';

import menuReducer from './menu/reducers';

export default combineReducers({
  menu: menuReducer,
});
