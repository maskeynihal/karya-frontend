import { SET_CURRENT_USER, USER_LOADING } from 'Redux/actions/types';

const INITIAL_STATE = {
  isAuthenticated: !!localStorage.getItem('karyaToken'),
  authToken: localStorage.getItem('karyaToken') || '',
  user: {},
  isLoading: false,
  hasError: false,
  errors: {}
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload = {} } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, isAuthenticated: !!Object.keys(payload).length, user: payload };
    case USER_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
