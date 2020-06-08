import * as types from './types';

export const fetchCurrency = () => ({
  type: types.FETCH_CURRENCY,
});

export const setCurrency = (currency) => ({
  type: types.SET_CURRENCY,
  currency,
});

export const setSelectedCurrency = (selectedCurrency) => ({
  type: types.SET_SELECTED_CURRENCY,
  selectedCurrency,
});

export const setSelectedCurrencySet = (currencySet) => ({
  type: types.SET_SELECTED_CURRENCY_SET,
  currencySet,
});
