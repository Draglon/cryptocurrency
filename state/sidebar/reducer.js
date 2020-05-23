import * as types from './types';
import { SIDEBAR } from '../../constants/sidebar';

const initialState = {
  sidebarStatus: SIDEBAR.close,
};

const sidebarStatus = (state = initialState, action) => {
  switch (action.type) {
    case types.SIDEBAR_STATUS: {
      return {
        sidebarStatus: action.status,
      };
    }
    default:
      return state;
  }
};

export default sidebarStatus;
