import { combineReducers } from 'redux';

import * as types from './types';

const rates = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CURRENCY: {
      return action.currency.rates;
    }
    default:
      return state;
  }
};

const selectedCurrencySet = (state = [], action) => {
  switch (action.type) {
    case types.SET_SELECTED_CURRENCY_SET: {
      return action.currencySet;
    }
    default:
      return state;
  }
};

const selectedCurrency = (state = 'USD', action) => {
  switch (action.type) {
    case types.SET_SELECTED_CURRENCY: {
      return action.selectedCurrency;
    }
    default:
      return state;
  }
};

export default combineReducers({
  rates,
  selectedCurrency,
  selectedCurrencySet,
});
