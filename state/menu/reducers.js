import * as types from './types';
import { MENU_MODAL } from '../../constants/menu';

const initialState = {
  menuStatus: MENU_MODAL.close,
};

function menuStatusReducer(state = initialState, action) {
  switch (action.type) {
    case types.MENU_STATUS: {
      return {
        ...state,
        menuStatus: action.status,
      };
    }
    default:
      return state;
  }
}

export default menuStatusReducer;
