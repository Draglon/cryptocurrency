import { includes } from 'ramda';

import addToCurrencySet from './addToCurrencySet';
import removeFromCurrencySet from './removeFromCurrencySet';

export default (currency, currencySet) => (
  includes(currency, currencySet)
    ? removeFromCurrencySet([currency], currencySet)
    : addToCurrencySet([currency], currencySet)
);
