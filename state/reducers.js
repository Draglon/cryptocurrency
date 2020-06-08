import { combineReducers } from 'redux';

// import { default as intl } from './intl';
import theme from './theme';
import currency from './currency';

export default combineReducers({
  theme,
  currency,
  // intl,
});
