import { createLogic } from 'redux-logic';

import { setCurrency } from '../actions';
import { FETCH_CURRENCY } from '../types';

const fetchCurrencyOperation = createLogic({
  type: FETCH_CURRENCY,
  latest: true,

  process({ httpClient }, dispatch, done) {
    httpClient.get('latest')
      .then((resp) => {
        dispatch(setCurrency(resp.data));
      })
      .catch((error) => error)
      .then(() => done());
  },
});

export default fetchCurrencyOperation;
