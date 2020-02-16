import { combineReducers } from 'redux';

const INITIAL_STATE = {
  uthType: null
};

const applySetUserType = (state, action) => ({
  ...state,
  authType: action.payload,
});

function authTypeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'AUTH_TYPE': {
      return applySetUserType(state, action);
    }
    default:
      return state;
  }
}

export default combineReducers({
  auth: authTypeReducer,
})