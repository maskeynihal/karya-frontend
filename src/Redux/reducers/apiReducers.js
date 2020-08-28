import { authActions, apiActions } from 'Redux/actions';

export default (
  state = {
    isAuthenticated: !!localStorage.getItem('karyaToken'),
    authToken: localStorage.getItem('karyaToken') || '',
    isLoading: false,
    hasError: false,
    errors: {}
  },
  action
) => {
  switch (action.type) {
    case apiActions.API_SUCCESS:
      if (action.payload.token) {
        localStorage.setItem('karyaToken', action.payload.token);
      }

      return { ...state, isAuthenticated: true, hasError: false, errors: {}, authToken: action.payload.token };

    case apiActions.API_ERROR:
      return { ...state, hasError: true, errors: action.payload };

    case authActions.LOGOUT:
      localStorage.setItem('karyaToken', '');

      return { ...state, isAuthenticated: false, authToken: '' };

    default:
      return state;
  }
};
