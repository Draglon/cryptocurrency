import * as types from './types';
import { SIDEBAR } from '../../constants/sidebar';

const initialState = {
  sidebarStatus: SIDEBAR.close,
};

function sidebarStatusReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIDEBAR_STATUS: {
      return {
        ...state,
        sidebarStatus: action.status,
      };
    }
    default:
      return state;
  }
}

export default sidebarStatusReducer;
