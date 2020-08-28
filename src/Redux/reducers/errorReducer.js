import { GET_ERRORS } from '../actions/types';
const INITIAL_STATE = {};

/**
 * Error Reducer.
 *
 * @param state
 * @param action
 */
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
