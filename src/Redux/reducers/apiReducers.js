import { authActions, apiActions } from 'Redux/actions';

export default (
  state = {
    isAuthenticated: !!localStorage.getItem('karyaAuthToken'),
    authToken: localStorage.getItem('karyaAuthToken') || '',
    isLoading: false,
    hasError: false,
    errors: {}
  },
  action
) => {
  switch (action.type) {
    case apiActions.API_SUCCESS:
      if (action.payload.token) {
        localStorage.setItem('karyaAuthToken', action.payload.token);
      }

      return { ...state, isAuthenticated: true, hasError: false, errors: {}, authToken: action.payload.token };

    case apiActions.API_ERROR:
      return { ...state, hasError: true, errors: action.payload };

    case authActions.LOGOUT:
      localStorage.setItem('karyaAuthToken', '');

      return { ...state, isAuthenticated: false, authToken: '' };

    default:
      return state;
  }
};
