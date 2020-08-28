import { usersActions } from 'Redux/actions';

const INITIAL_STATE = {
  isLoading: false,
  redirect: false,
  users: [],
  currentUser: {}
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case usersActions.GET_USERS_STARTED:
      return { ...state, isLoading: true };
    case usersActions.GET_USERS_SUCCESS:
      return { ...state, redirect: false, isLoading: false, users: [...payload.response.data] };
    case usersActions.CREATE_USER_SUCCESS:
      return { ...state, redirect: true, isLoading: false, users: [...state.users, payload.response.data] };
    case usersActions.SHOW_USER_SUCCESS:
      return { ...state, currentUser: payload.response.data };
    case usersActions.GET_USERS_FAILURE:
      return { ...state, isLoading: false, users: [], error: payload.error };
    case usersActions.EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        redirect: true,
        users: state.users.map((user) => {
          if (user.id === payload.response.data.id) {
            user = payload.response.data;
          }

          return user;
        })
      };
    case usersActions.setUserInitialState:
      console.log('INITIAL_STATE', INITIAL_STATE);

      return { INITIAL_STATE };
    default:
      return state;
  }
};
