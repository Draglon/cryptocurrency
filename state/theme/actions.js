import * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const setTypeTheme = (typeTheme) => ({
  type: types.UPDATE_THEME,
  typeTheme,
});
