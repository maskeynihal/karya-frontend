export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_COUNT = 'ADD_COUNT';

export const toggleModal = (isShowing, modalComponent, id) => ({
  type: TOGGLE_MODAL,
  payload: {
    isShowing: !isShowing,
    modalComponent: modalComponent,
    id: id
  }
});

export const addCount = (count) => ({
  type: ADD_COUNT,
  payload: count + 1
});
