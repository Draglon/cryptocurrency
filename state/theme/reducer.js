import { THEME_CHECKBOXES } from '../../constants/theme';
import * as types from './types';

const initialState = {
  theme: 'light',
  checkboxes: THEME_CHECKBOXES,
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_THEME: {
      return action.typeTheme;
    }
    default:
      return state;
  }
};

export default theme;
