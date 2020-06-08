import { concat, pipe, uniq } from 'ramda';

export default pipe(
  concat,
  uniq,
);
