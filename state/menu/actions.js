import * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const menuStatus = (status) => ({
  type: types.MENU_STATUS,
  status,
});
