import * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const sidebarStatus = (status) => ({
  type: types.SIDEBAR_STATUS,
  status,
});
