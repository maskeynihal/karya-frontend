import { modalActions } from 'Redux/actions';

const INITIAL_STATE = {
  isShowing: false,
  modalComponent: 'LargeCard',
  id: 1
};

/**
 * Modal Reducer.
 *
 * @param {Object} state
 * @param {Object} action
 */
export default function modalReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case modalActions.TOGGLE_MODAL:
      return { ...state, ...payload };
    case modalActions.OPEN_MODAL:
      return {
        ...state,
        ...payload,
        isShowing: true
      };
    case modalActions.CLOSE_MODAL:
      return {
        ...state,
        ...payload,
        isShowing: false
      };
    case modalActions.ADD_COUNT:
      return {
        ...state,
        ...payload,
        count: payload
      };
    default:
      return { ...state };
  }
}
