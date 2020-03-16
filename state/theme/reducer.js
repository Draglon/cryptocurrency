import * as types from './types';

import { THEME_CHECKBOXES } from '../../constants/theme';

const initialState = {
  theme: 'light',
  checkboxes: THEME_CHECKBOXES,
};

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
