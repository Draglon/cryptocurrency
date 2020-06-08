import { without, pipe, uniq } from 'ramda';

export default pipe(
  without,
  uniq,
);
