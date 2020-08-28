import { tasksActions } from 'Redux/actions';

const INITIAL_STATE = {
  isLoading: false,
  redirect: false,
  tasks: [],
  currentTask: {}
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case tasksActions.GET_TASKS_STARTED:
      return { ...state, isLoading: true };
    case tasksActions.GET_TASKS_SUCCESS:
      return { ...state, redirect: false, isLoading: false, tasks: [...payload.response.data] };
    case tasksActions.CREATE_TASK_SUCCESS:
      return { ...state, redirect: true, isLoading: false, tasks: [...state.tasks, payload.response.data] };
    case tasksActions.SHOW_TASK_SUCCESS:
      return { ...state, currentTask: payload.response.data };
    case tasksActions.GET_TASKS_FAILURE:
      return { ...state, isLoading: false, tasks: [], error: payload.error };
    case tasksActions.EDIT_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        redirect: true,
        tasks: state.tasks.map((user) => {
          if (user.id === payload.response.data.id) {
            user = payload.response.data;
          }

          return user;
        })
      };
    case tasksActions.REDIRECT_TOGGLE:
      return { ...state, redirect: payload };
    default:
      return state;
  }
};
