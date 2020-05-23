import { combineReducers } from 'redux';

// import { default as intl } from './intl';
import theme from './theme';
import sidebar from './sidebar';
import currency from './currency';

export default combineReducers({
  theme,
  sidebar,
  currency,
  // intl,
});
