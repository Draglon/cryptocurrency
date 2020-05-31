import { combineReducers } from 'redux';

import * as types from './types';

const initialState = {
  modalType: null,
  modalProps: {},
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        modalType: action.modalType,
        modalProps: action.modalProps,
      };
    }
    case types.HIDE_MODAL: {
      return {
        modalType: null,
        modalProps: {},
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  modal,
});
