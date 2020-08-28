import { SET_CURRENT_USER, USER_LOADING, SET_AUTH_INITIAL } from 'Redux/actions/types';
import jwtDecode from 'jwt-decode';

const authToken = localStorage.getItem('karyaToken');
const INITIAL_STATE = {
  isAuthenticated: !!authToken,
  authToken: authToken || '',
  user: authToken ? jwtDecode(authToken) : {},
  isLoading: false,
  hasError: false,
  errors: {}
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload = {} } = action;

  console.log(payload);
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, isAuthenticated: !!payload.token, user: payload.user, authToken: payload.token };
    case USER_LOADING:
      return { ...state, isLoading: true };
    case SET_AUTH_INITIAL:
      return { ...INITIAL_STATE, authToken: '' };
    default:
      return state;
  }
};
