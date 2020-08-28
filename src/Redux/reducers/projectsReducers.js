import { projectsActions } from 'Redux/actions';

const INITIAL_STATE = {
  isLoading: false,
  redirect: false,
  projects: [],
  currentProject: {}
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case projectsActions.GET_PROJECTS_STARTED:
      return { ...state, isLoading: true };
    case projectsActions.GET_PROJECTS_SUCCESS:
      return { ...state, redirect: false, isLoading: false, projects: [...payload.response.data] };
    case projectsActions.CREATE_PROJECT_SUCCESS:
      return { ...state, redirect: true, isLoading: false, projects: [...state.projects, payload.response.data] };
    case projectsActions.SHOW_PROJECT_SUCCESS:
      return { ...state, currentProject: payload.response.data };
    case projectsActions.GET_PROJECTS_FAILURE:
      return { ...state, isLoading: false, projects: [], error: payload.error };
    case projectsActions.EDIT_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        redirect: true,
        projects: state.projects.map((user) => {
          if (user.id === payload.response.data.id) {
            user = payload.response.data;
          }

          return user;
        })
      };
    default:
      return state;
  }
};
