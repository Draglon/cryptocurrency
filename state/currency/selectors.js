// eslint-disable-next-line import/no-extraneous-dependencies
import { createSelector } from 'reselect';
import { without } from 'ramda';

export const currencyRatesSelector = (state) => state.currency.rates;
export const selectedCurrencySelector = (state) => state.currency.selectedCurrency;
export const selectedCurrencySetSelector = (state) => state.currency.selectedCurrencySet;

export const selectedSetSelector = createSelector(
  selectedCurrencySelector,
  selectedCurrencySetSelector,
  (currency, currencySet) => without(currency, currencySet),
);
