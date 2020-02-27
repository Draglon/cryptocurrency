import * as types from './types';

const initialState = 'light';

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_THEME: {
      return action.typeTheme;
    }
    default:
      return state;
  }
}

export default themeReducer;
