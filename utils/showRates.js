import { keys, includes } from 'ramda';

export default (rates, selectedCurrencySet) => (
  keys(rates).filter((currency) => includes(currency, selectedCurrencySet))
);
