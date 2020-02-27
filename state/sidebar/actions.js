import * as types from './types';

export const sidebarStatus = (status) => ({
  type: types.SIDEBAR_STATUS,
  status,
});
