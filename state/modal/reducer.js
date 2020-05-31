import { combineReducers } from 'redux';

import * as types from './types';

const initialState = {
  isVisible: false,
  title: null,
  type: null,
};

const modalProps = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHOW_MODAL: {
      return {
        isVisible: true,
        title: action.modalProps.title,
        type: action.modalProps.type,
      };
    }
    case types.SET_HIDE_MODAL: {
      return {
        isVisible: false,
        title: null,
        type: null,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  modalProps,
});
