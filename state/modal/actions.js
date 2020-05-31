import * as types from './types';

export const showModal = (modalProps) => ({
  type: types.SET_SHOW_MODAL,
  modalProps,
});

export const hideModal = () => ({
  type: types.SET_HIDE_MODAL,
});
